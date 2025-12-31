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
exports.AdminTechniquesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const media_service_1 = require("../../media/media.service");
let AdminTechniquesService = class AdminTechniquesService {
    prisma;
    mediaService;
    constructor(prisma, mediaService) {
        this.prisma = prisma;
        this.mediaService = mediaService;
    }
    async findAll() {
        return this.prisma.technique.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.technique.findUnique({
            where: { id },
        });
    }
    async create(dto, file) {
        let finalVideoUrl = dto.videoUrl;
        if (file) {
            const uploadResult = await this.mediaService.handleUpload(file);
            finalVideoUrl = uploadResult.url;
        }
        return this.prisma.technique.create({
            data: {
                id: dto.id,
                title: dto.title,
                subtitle: dto.subtitle,
                difficulty: dto.difficulty,
                duration: dto.duration,
                image: dto.image,
                videoUrl: finalVideoUrl,
                visualType: dto.visualType,
                visualRatio: dto.visualRatio,
                description: dto.description,
                isFeatured: dto.isFeatured ?? false,
                categoryId: dto.categoryId,
                steps: typeof dto.steps === 'string' ? dto.steps : JSON.stringify(dto.steps),
                benefits: typeof dto.benefits === 'string' ? dto.benefits : JSON.stringify(dto.benefits),
                precautions: typeof dto.precautions === 'string' ? dto.precautions : JSON.stringify(dto.precautions),
            },
        });
    }
    async update(id, dto) {
        const data = { ...dto };
        if (dto.steps)
            data.steps = typeof dto.steps === 'string' ? dto.steps : JSON.stringify(dto.steps);
        if (dto.benefits)
            data.benefits = typeof dto.benefits === 'string' ? dto.benefits : JSON.stringify(dto.benefits);
        if (dto.precautions)
            data.precautions = typeof dto.precautions === 'string' ? dto.precautions : JSON.stringify(dto.precautions);
        return this.prisma.technique.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.technique.delete({ where: { id } });
    }
};
exports.AdminTechniquesService = AdminTechniquesService;
exports.AdminTechniquesService = AdminTechniquesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        media_service_1.MediaService])
], AdminTechniquesService);
//# sourceMappingURL=admin-techniques.service.js.map