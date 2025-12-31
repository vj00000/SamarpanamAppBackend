import { PrismaService } from '../common/prisma/prisma.service';
import { CategoryDto, CategoryDetailDto } from './dto/category.dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<CategoryDto[]>;
    findOne(id: string): Promise<CategoryDetailDto>;
}
