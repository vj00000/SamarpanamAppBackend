export declare class TechniqueSummaryDto {
    id: string;
    title: string;
    duration: string;
    level: string;
    image: string;
}
export declare class TechniqueFeaturedDto {
    id: string;
    title: string;
    duration: string;
    level: string;
    image: string;
    visualType?: string;
    visualRatio?: string;
    isFavorite: boolean;
}
export declare class TechniqueDetailDto {
    id: string;
    title: string;
    subtitle: string;
    difficulty: string;
    duration: string;
    image: string;
    videoUrl?: string;
    visualType: string;
    visualRatio: string;
    description: string;
    steps: string[];
    benefits: string[];
    precautions: string[];
    isFavorite: boolean;
}
