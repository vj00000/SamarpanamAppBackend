import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { TechniqueFeaturedDto, TechniqueDetailDto, TechniqueSummaryDto } from './dto/technique.dto';
import { TechniqueQueryDto } from './dto/technique-query.dto';

@Injectable()
export class TechniquesService {
    constructor(private prisma: PrismaService) { }

    async findAll(query: TechniqueQueryDto): Promise<TechniqueSummaryDto[]> {
        const { search, difficulty, category } = query;
        const techniques = await this.prisma.technique.findMany({
            where: {
                AND: [
                    search ? { title: { contains: search } } : {},
                    difficulty ? { difficulty } : {},
                    category ? { categoryId: category } : {},
                ],
            },
            select: {
                id: true,
                title: true,
                duration: true,
                difficulty: true,
                image: true,
            },
        });

        return techniques.map(t => ({
            id: t.id,
            title: t.title,
            duration: t.duration,
            level: t.difficulty,
            image: t.image,
        }));
    }

    async findFeatured(): Promise<TechniqueFeaturedDto[]> {
        const techniques = await this.prisma.technique.findMany({
            where: { isFeatured: true },
        });

        return techniques.map(t => ({
            id: t.id,
            title: t.title,
            duration: t.duration,
            level: t.difficulty,
            image: t.image,
            visualType: t.visualType || 'image',
            visualRatio: t.visualRatio || '16:9',
            isFavorite: false, // Default for featured list
        }));
    }

    async findOne(id: string, userId?: string): Promise<TechniqueDetailDto> {
        const technique = await this.prisma.technique.findUnique({
            where: { id },
        });

        if (!technique) {
            throw new NotFoundException(`Technique with ID ${id} not found`);
        }

        let isFavorite = false;
        if (userId) {
            const favorite = await this.prisma.favoriteTechnique.findUnique({
                where: {
                    userId_techniqueId: {
                        userId,
                        techniqueId: id,
                    },
                },
            });
            isFavorite = !!favorite;
        }

        return {
            id: technique.id,
            title: technique.title,
            subtitle: technique.subtitle,
            difficulty: technique.difficulty,
            duration: technique.duration,
            image: technique.image,
            videoUrl: technique.videoUrl || undefined,
            visualType: technique.visualType || 'image',
            visualRatio: technique.visualRatio || '16:9',
            description: technique.description,
            steps: JSON.parse(technique.steps),
            benefits: JSON.parse(technique.benefits),
            precautions: JSON.parse(technique.precautions),
            isFavorite,
        };
    }

    async toggleFavorite(techniqueId: string, userId: string): Promise<{ isFavorite: boolean }> {
        const existing = await this.prisma.favoriteTechnique.findUnique({
            where: {
                userId_techniqueId: {
                    userId,
                    techniqueId,
                },
            },
        });

        if (existing) {
            await this.prisma.favoriteTechnique.delete({
                where: {
                    userId_techniqueId: {
                        userId,
                        techniqueId,
                    },
                },
            });
            return { isFavorite: false };
        } else {
            await this.prisma.favoriteTechnique.create({
                data: {
                    userId,
                    techniqueId,
                },
            });
            return { isFavorite: true };
        }
    }

    async getFavorites(userId: string): Promise<TechniqueSummaryDto[]> {
        const favorites = await this.prisma.favoriteTechnique.findMany({
            where: { userId },
            include: { technique: true },
        });

        return favorites.map(f => ({
            id: f.technique.id,
            title: f.technique.title,
            duration: f.technique.duration,
            level: f.technique.difficulty,
            image: f.technique.image,
        }));
    }
}
