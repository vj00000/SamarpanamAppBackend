import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateFoodDto {
    @ApiProperty({ example: 'Vata' })
    @IsString()
    @IsNotEmpty()
    dosha: string;

    @ApiProperty({ example: 'Summer' })
    @IsString()
    @IsNotEmpty()
    season: string;

    @ApiProperty({ example: 'Morning' })
    @IsString()
    @IsNotEmpty()
    timeOfDay: string;

    @ApiProperty({ example: 'Oatmeal with Almonds' })
    @IsString()
    @IsNotEmpty()
    suggestion: string;

    @ApiProperty({ example: 'https://images.unsplash.com/...' })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({ example: 'A warm and grounding breakfast.' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: '350 kcal' })
    @IsString()
    @IsNotEmpty()
    calories: string;

    @ApiProperty({ example: ['Warm', 'Oily'] })
    @IsArray()
    @IsNotEmpty()
    tags: string[];
}
