export declare class FoodMenuDto {
    id: string;
    dosha: string;
    season: string;
    timeOfDay: string;
    suggestion: string;
    image: string;
    description: string;
    calories: string;
    tags: string[];
}
export declare class FoodMenuItemDto {
    time: string;
    suggestion: string;
    image: string;
    description: string;
    calories: string;
    tags: string[];
}
export declare class FoodRecommendationDto {
    dosha: string;
    season: string;
    dailyMenu: FoodMenuItemDto[];
    avoid: string[];
}
