import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoryDto, CategoryDetailDto } from './dto/category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all yoga categories' })
    @ApiResponse({ status: 200, type: [CategoryDto] })
    async findAll(): Promise<CategoryDto[]> {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get details of a specific category including techniques' })
    @ApiResponse({ status: 200, type: CategoryDetailDto })
    @ApiResponse({ status: 404, description: 'Category not found' })
    async findOne(@Param('id') id: string): Promise<CategoryDetailDto> {
        return this.categoriesService.findOne(id);
    }
}
