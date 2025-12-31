"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechniquesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let TechniquesService = class TechniquesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
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
    async findFeatured() {
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
            isFavorite: false,
        }));
    }
    async findOne(id, userId) {
        const technique = await this.prisma.technique.findUnique({
            where: { id },
        });
        if (!technique) {
            throw new common_1.NotFoundException(`Technique with ID ${id} not found`);
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
    async toggleFavorite(techniqueId, userId) {
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
        }
        else {
            await this.prisma.favoriteTechnique.create({
                data: {
                    userId,
                    techniqueId,
                },
            });
            return { isFavorite: true };
        }
    }
    async getFavorites(userId) {
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
};
exports.TechniquesService = TechniquesService;
exports.TechniquesService = TechniquesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TechniquesService);
//# sourceMappingURL=techniques.service.js.map