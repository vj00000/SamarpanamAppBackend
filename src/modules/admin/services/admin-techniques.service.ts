import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { MediaService } from '../../media/media.service';
import { CreateTechniqueDto } from '../../techniques/dto/create-technique.dto';
import { UpdateTechniqueDto } from '../../techniques/dto/update-technique.dto';

@Injectable()
export class AdminTechniquesService {
    constructor(
        private prisma: PrismaService,
        private mediaService: MediaService,
    ) { }

    async findAll() {
        return this.prisma.technique.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.technique.findUnique({
            where: { id },
        });
    }

    async create(dto: CreateTechniqueDto, file?: Express.Multer.File) {
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

    async update(id: string, dto: UpdateTechniqueDto) {
        const data: any = { ...dto };

        if (dto.steps) data.steps = typeof dto.steps === 'string' ? dto.steps : JSON.stringify(dto.steps);
        if (dto.benefits) data.benefits = typeof dto.benefits === 'string' ? dto.benefits : JSON.stringify(dto.benefits);
        if (dto.precautions) data.precautions = typeof dto.precautions === 'string' ? dto.precautions : JSON.stringify(dto.precautions);

        return this.prisma.technique.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.technique.delete({ where: { id } });
    }
}
