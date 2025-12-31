export declare enum Difficulty {
    BEGINNER = "Beginner",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced"
}
export declare class TechniqueQueryDto {
    search?: string;
    difficulty?: Difficulty;
    category?: string;
}
