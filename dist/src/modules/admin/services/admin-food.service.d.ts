import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateFoodDto } from '../../food/dto/create-food.dto';
import { UpdateFoodDto } from '../../food/dto/update-food.dto';
export declare class AdminFoodService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        tags: string;
        dosha: string;
        season: string;
        timeOfDay: string;
        suggestion: string;
        calories: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        tags: string;
        dosha: string;
        season: string;
        timeOfDay: string;
        suggestion: string;
        calories: string;
    } | null>;
    create(dto: CreateFoodDto): Promise<{
        id: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        tags: string;
        dosha: string;
        season: string;
        timeOfDay: string;
        suggestion: string;
        calories: string;
    }>;
    update(id: string, dto: UpdateFoodDto): Promise<{
        id: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        tags: string;
        dosha: string;
        season: string;
        timeOfDay: string;
        suggestion: string;
        calories: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        tags: string;
        dosha: string;
        season: string;
        timeOfDay: string;
        suggestion: string;
        calories: string;
    }>;
}
