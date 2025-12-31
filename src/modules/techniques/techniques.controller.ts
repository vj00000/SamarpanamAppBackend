import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TechniquesService } from './techniques.service';
import { TechniqueFeaturedDto, TechniqueDetailDto, TechniqueSummaryDto } from './dto/technique.dto';
import { TechniqueQueryDto } from './dto/technique-query.dto';

@ApiTags('Techniques')
@Controller('techniques')
export class TechniquesController {
    constructor(private readonly techniquesService: TechniquesService) { }

    @Get()
    @ApiOperation({ summary: 'Search and filter techniques' })
    @ApiResponse({ status: 200, type: [TechniqueSummaryDto] })
    async findAll(@Query() query: TechniqueQueryDto): Promise<TechniqueSummaryDto[]> {
        return this.techniquesService.findAll(query);
    }

    @Get('favorites')
    @ApiOperation({ summary: 'Get favorite techniques for a user' })
    @ApiResponse({ status: 200, type: [TechniqueSummaryDto] })
    async getFavorites(@Query('userId') userId: string): Promise<TechniqueSummaryDto[]> {
        return this.techniquesService.getFavorites(userId);
    }

    @Post(':id/favorite')
    @ApiOperation({ summary: 'Toggle favorite status for a technique' })
    async toggleFavorite(
        @Param('id') id: string,
        @Query('userId') userId: string,
    ): Promise<{ isFavorite: boolean }> {
        return this.techniquesService.toggleFavorite(id, userId);
    }

    @Get('featured')
    @ApiOperation({ summary: 'Get featured techniques for home screen' })
    @ApiResponse({ status: 200, type: [TechniqueFeaturedDto] })
    async findFeatured(): Promise<TechniqueFeaturedDto[]> {
        return this.techniquesService.findFeatured();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get details of a specific technique' })
    @ApiResponse({ status: 200, type: TechniqueDetailDto })
    @ApiResponse({ status: 404, description: 'Technique not found' })
    async findOne(
        @Param('id') id: string,
        @Query('userId') userId?: string,
    ): Promise<TechniqueDetailDto> {
        return this.techniquesService.findOne(id, userId);
    }
}
