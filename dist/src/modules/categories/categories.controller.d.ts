import { CategoriesService } from './categories.service';
import { CategoryDto, CategoryDetailDto } from './dto/category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<CategoryDto[]>;
    findOne(id: string): Promise<CategoryDetailDto>;
}
