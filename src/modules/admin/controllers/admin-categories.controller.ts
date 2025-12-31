import { Controller, Post, Delete, Body, Param, Patch, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminCategoriesService } from '../services/admin-categories.service';
import { CreateCategoryDto } from '../../categories/dto/create-category.dto';
import { UpdateCategoryDto } from '../../categories/dto/update-category.dto';
import { CategoryDto } from '../../categories/dto/category.dto';

@ApiTags('Admin / Categories')
@Controller('admin/categories')
export class AdminCategoriesController {
    constructor(private readonly adminService: AdminCategoriesService) { }

    @Get()
    @ApiOperation({ summary: 'Get all categories (Admin view)' })
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single category by ID' })
    async findOne(@Param('id') id: string) {
        return this.adminService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new category' })
    @ApiResponse({ status: 201, type: CategoryDto })
    async create(@Body() dto: CreateCategoryDto) {
        return this.adminService.create(dto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a category' })
    async update(@Param('id') id: string, @Body() dto: UpdateCategoryDto) {
        return this.adminService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a category' })
    async remove(@Param('id') id: string) {
        return this.adminService.remove(id);
    }
}
