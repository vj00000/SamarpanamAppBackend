import { Controller, Post, Delete, Body, Param, Patch, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdminFoodService } from '../services/admin-food.service';
import { CreateFoodDto } from '../../food/dto/create-food.dto';
import { UpdateFoodDto } from '../../food/dto/update-food.dto';
import { FoodMenuDto } from '../../food/dto/food.dto';

@ApiTags('Admin / Food')
@Controller('admin/food')
export class AdminFoodController {
    constructor(private readonly adminService: AdminFoodService) { }

    @Get()
    @ApiOperation({ summary: 'Get all food items (Admin view)' })
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single food item by ID' })
    async findOne(@Param('id') id: string) {
        return this.adminService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new food recommendation' })
    @ApiResponse({ status: 201, type: FoodMenuDto })
    async create(@Body() dto: CreateFoodDto) {
        return this.adminService.create(dto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update a food recommendation' })
    async update(@Param('id') id: string, @Body() dto: UpdateFoodDto) {
        return this.adminService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a food recommendation' })
    async remove(@Param('id') id: string) {
        return this.adminService.remove(id);
    }
}
