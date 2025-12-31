import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum Difficulty {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    ADVANCED = 'Advanced',
}

export class TechniqueQueryDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiProperty({ required: false, enum: Difficulty })
    @IsOptional()
    @IsEnum(Difficulty)
    difficulty?: Difficulty;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    category?: string;
}
