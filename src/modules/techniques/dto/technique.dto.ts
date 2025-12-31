import { ApiProperty } from '@nestjs/swagger';

export class TechniqueSummaryDto {
    @ApiProperty({ example: '1' })
    id: string;

    @ApiProperty({ example: 'Anulom Vilom' })
    title: string;

    @ApiProperty({ example: '10 min' })
    duration: string;

    @ApiProperty({ example: 'Beginner' })
    level: string;

    @ApiProperty({ example: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' })
    image: string;
}

export class TechniqueFeaturedDto {
    @ApiProperty({ example: 'fire-gaze' })
    id: string;

    @ApiProperty({ example: 'Fire Gaze Breath' })
    title: string;

    @ApiProperty({ example: '5 min' })
    duration: string;

    @ApiProperty({ example: 'Advanced' })
    level: string;

    @ApiProperty({ example: '' })
    image: string;

    @ApiProperty({ example: 'fire-gaze', required: false })
    visualType?: string;

    @ApiProperty({ example: '4:4:4:4', required: false })
    visualRatio?: string;

    @ApiProperty({ example: false })
    isFavorite: boolean;
}

export class TechniqueDetailDto {
    @ApiProperty({ example: 'fire-gaze' })
    id: string;

    @ApiProperty({ example: 'Fire Gaze Breath' })
    title: string;

    @ApiProperty({ example: 'Agni Drishti Pranayama' })
    subtitle: string;

    @ApiProperty({ example: 'Advanced' })
    difficulty: string;

    @ApiProperty({ example: '5 minutes' })
    duration: string;

    @ApiProperty({ example: '' })
    image: string;

    @ApiProperty({ example: 'https://example.com/video.mp4', required: false })
    videoUrl?: string;

    @ApiProperty({ example: 'fire-gaze' })
    visualType: string;

    @ApiProperty({ example: '4:4:4:4' })
    visualRatio: string;

    @ApiProperty({ example: 'An advanced visualization-based breathing technique...' })
    description: string;

    @ApiProperty({ example: ['Posture: Sit upright...', 'Focus: Keep eyes open...'] })
    steps: string[];

    @ApiProperty({ example: ['Improves concentration', 'Generates internal heat'] })
    benefits: string[];

    @ApiProperty({ example: ['Avoid if you have high blood pressure'] })
    precautions: string[];

    @ApiProperty({ example: false })
    isFavorite: boolean;
}
