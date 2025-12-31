import { ApiProperty } from '@nestjs/swagger';

export class FoodMenuDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    dosha: string;
    @ApiProperty()
    season: string;
    @ApiProperty({ example: 'Morning' })
    timeOfDay: string;
    @ApiProperty()
    suggestion: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    calories: string;
    @ApiProperty({ type: [String] })
    tags: string[];
}

export class FoodMenuItemDto {
    @ApiProperty()
    time: string;
    @ApiProperty()
    suggestion: string;
    @ApiProperty()
    image: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    calories: string;
    @ApiProperty({ type: [String] })
    tags: string[];
}

export class FoodRecommendationDto {
    @ApiProperty()
    dosha: string;
    @ApiProperty()
    season: string;
    @ApiProperty({ type: [FoodMenuItemDto] })
    dailyMenu: FoodMenuItemDto[];
    @ApiProperty({ type: [String] })
    avoid: string[];
}
