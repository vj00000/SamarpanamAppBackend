import { ApiProperty } from '@nestjs/swagger';
import { TechniqueSummaryDto } from '../../techniques/dto/technique.dto';

export class CategoryDto {
    @ApiProperty({ example: '1' })
    id: string;

    @ApiProperty({ example: 'Pranayama' })
    title: string;

    @ApiProperty({ example: '🧘' })
    icon: string;

    @ApiProperty({ example: '#8B9467' })
    color: string;
}

export class CategoryDetailDto extends CategoryDto {
    @ApiProperty({ example: 'Control your breath, control your life.' })
    description: string;

    @ApiProperty({ example: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773' })
    image: string;

    @ApiProperty({ type: [TechniqueSummaryDto] })
    techniques: TechniqueSummaryDto[];
}
