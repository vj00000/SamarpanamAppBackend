import { AdminCategoriesService } from '../services/admin-categories.service';
import { CreateCategoryDto } from '../../categories/dto/create-category.dto';
import { UpdateCategoryDto } from '../../categories/dto/update-category.dto';
export declare class AdminCategoriesController {
    private readonly adminService;
    constructor(adminService: AdminCategoriesService);
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
