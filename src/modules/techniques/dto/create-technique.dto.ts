import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreateTechniqueDto {
    @ApiProperty({ example: 'new-breathe-technique' })
    @IsString()
    @IsNotEmpty()
    id: string; // The slug/id

    @ApiProperty({ example: 'Sitali Pranayama' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Cooling Breath' })
    @IsString()
    @IsNotEmpty()
    subtitle: string;

    @ApiProperty({ example: 'Beginner' })
    @IsString()
    @IsNotEmpty()
    difficulty: string;

    @ApiProperty({ example: '10 minutes' })
    @IsString()
    @IsNotEmpty()
    duration: string;

    @ApiProperty({ example: 'https://images.unsplash.com/...' })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({ example: 'http://localhost:8080/public/videos/...', required: false })
    @IsString()
    @IsOptional()
    videoUrl?: string;

    @ApiProperty({ example: 'circle', required: false })
    @IsString()
    @IsOptional()
    visualType?: string;

    @ApiProperty({ example: '4:4:4:4', required: false })
    @IsString()
    @IsOptional()
    visualRatio?: string;

    @ApiProperty({ example: 'A refreshing and cooling breathing practice.' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: ['Sit comfortably', 'Curl your tongue', 'Inhale through tongue'] })
    @IsArray()
    @IsNotEmpty()
    steps: string[];

    @ApiProperty({ example: ['Cools the body', 'Reduces anxiety'] })
    @IsArray()
    @IsNotEmpty()
    benefits: string[];

    @ApiProperty({ example: ['Avoid if you have a cold'] })
    @IsArray()
    @IsNotEmpty()
    precautions: string[];

    @ApiProperty({ example: false, default: false })
    @IsBoolean()
    @IsOptional()
    isFeatured?: boolean;

    @ApiProperty({ example: '1' }) // Category ID
    @IsString()
    @IsNotEmpty()
    categoryId: string;
}
