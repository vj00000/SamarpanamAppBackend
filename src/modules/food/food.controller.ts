import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FoodService } from './food.service';
import { FoodRecommendationDto } from './dto/food.dto';

@ApiTags('Aahar (Food)')
@Controller('food')
export class FoodController {
    constructor(private readonly foodService: FoodService) { }

    @Get('recommendations')
    @ApiOperation({ summary: 'Get personalized food recommendations' })
    @ApiResponse({ status: 200, type: FoodRecommendationDto })
    async getRecommendations(@Query('dosha') dosha?: string): Promise<FoodRecommendationDto> {
        return this.foodService.getRecommendations(dosha);
    }
}
