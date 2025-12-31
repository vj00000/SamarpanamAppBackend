import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCategoryDto } from '../../categories/dto/create-category.dto';
import { UpdateCategoryDto } from '../../categories/dto/update-category.dto';

@Injectable()
export class AdminCategoriesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.category.findMany({
            orderBy: { title: 'asc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.category.findUnique({
            where: { id },
        });
    }

    async create(dto: CreateCategoryDto) {

        return this.prisma.category.create({
            data: dto,
        });
    }

    async update(id: string, dto: UpdateCategoryDto) {
        return this.prisma.category.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: string) {
        return this.prisma.category.delete({ where: { id } });
    }
}
