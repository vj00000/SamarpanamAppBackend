import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CategoryDto, CategoryDetailDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    async findAll(): Promise<CategoryDto[]> {
        return this.prisma.category.findMany({
            select: {
                id: true,
                title: true,
                icon: true,
                color: true,
            },
        });
    }

    async findOne(id: string): Promise<CategoryDetailDto> {
        const category = await this.prisma.category.findUnique({
            where: { id },
            include: {
                techniques: true,
            },
        });

        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }

        return {
            id: category.id,
            title: category.title,
            icon: category.icon,
            color: category.color,
            description: category.description,
            image: category.image,
            techniques: category.techniques.map(t => ({
                id: t.id,
                title: t.title,
                duration: t.duration,
                level: t.difficulty,
                image: t.image,
            })),
        };
    }
}
