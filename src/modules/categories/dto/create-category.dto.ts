import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty({ example: 'Pranayama' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: '🧘' })
    @IsString()
    @IsNotEmpty()
    icon: string;

    @ApiProperty({ example: '#8B9467' })
    @IsString()
    @IsNotEmpty()
    color: string;

    @ApiProperty({ example: 'Healing through breath.' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 'https://images.unsplash.com/...' })
    @IsString()
    @IsNotEmpty()
    image: string;
}
