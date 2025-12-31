import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateBlogDto {
    @ApiProperty({ example: 'The Power of Mindfulness' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Swami Vivekananda' })
    @IsString()
    @IsNotEmpty()
    author: string;

    @ApiProperty({ example: 'Oct 20, 2023' })
    @IsString()
    @IsNotEmpty()
    date: string;

    @ApiProperty({ example: '5 min' })
    @IsString()
    @IsNotEmpty()
    readTime: string;

    @ApiProperty({ example: 'https://images.unsplash.com/...' })
    @IsString()
    @IsNotEmpty()
    image: string;

    @ApiProperty({ example: 'A deep dive into mindfulness and its daily benefits.' })
    @IsString()
    @IsNotEmpty()
    excerpt: string;

    @ApiProperty({ example: ['Mindfulness', 'Peace'] })
    @IsArray()
    @IsNotEmpty()
    tags: string[];

    @ApiProperty({ example: [{ type: 'text', content: 'Mindfulness is...' }] })
    @IsArray()
    @IsNotEmpty()
    content: any[]; // The SDUI block list
}
