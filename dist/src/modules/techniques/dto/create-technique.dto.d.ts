export declare class CreateTechniqueDto {
    id: string;
    title: string;
    subtitle: string;
    difficulty: string;
    duration: string;
    image: string;
    videoUrl?: string;
    visualType?: string;
    visualRatio?: string;
    description: string;
    steps: string[];
    benefits: string[];
    precautions: string[];
    isFeatured?: boolean;
    categoryId: string;
}
