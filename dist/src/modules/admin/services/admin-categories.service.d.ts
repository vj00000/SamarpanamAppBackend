import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCategoryDto } from '../../categories/dto/create-category.dto';
import { UpdateCategoryDto } from '../../categories/dto/update-category.dto';
export declare class AdminCategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        color: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        color: string;
    } | null>;
    create(dto: CreateCategoryDto): Promise<{
        id: string;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        color: string;
    }>;
    update(id: string, dto: UpdateCategoryDto): Promise<{
        id: string;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        color: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        image: string;
        description: string;
        createdAt: Date;
        updatedAt: Date;
        icon: string;
        color: string;
    }>;
}
