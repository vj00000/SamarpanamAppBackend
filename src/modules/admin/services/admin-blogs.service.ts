import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateBlogDto } from '../../blogs/dto/create-blog.dto';
import { UpdateBlogDto } from '../../blogs/dto/update-blog.dto';

@Injectable()
export class AdminBlogsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.blog.findUnique({
            where: { id },
        });
    }

    async create(dto: CreateBlogDto) {

        return this.prisma.blog.create({
            data: {
                ...dto,
                tags: JSON.stringify(dto.tags),
                content: JSON.stringify(dto.content),
            },
        });
    }

    async update(id: string, dto: UpdateBlogDto) {
        const data: any = { ...dto };
        if (dto.tags) data.tags = JSON.stringify(dto.tags);
        if (dto.content) data.content = JSON.stringify(dto.content);

        return this.prisma.blog.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.blog.delete({ where: { id } });
    }
}
