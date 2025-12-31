import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateFoodDto } from '../../food/dto/create-food.dto';
import { UpdateFoodDto } from '../../food/dto/update-food.dto';

@Injectable()
export class AdminFoodService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.foodMenu.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.foodMenu.findUnique({
            where: { id },
        });
    }

    async create(dto: CreateFoodDto) {

        return this.prisma.foodMenu.create({
            data: {
                ...dto,
                tags: JSON.stringify(dto.tags),
            },
        });
    }

    async update(id: string, dto: UpdateFoodDto) {
        const data: any = { ...dto };
        if (dto.tags) data.tags = JSON.stringify(dto.tags);

        return this.prisma.foodMenu.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.foodMenu.delete({ where: { id } });
    }
}
