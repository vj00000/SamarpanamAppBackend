import { FoodService } from './food.service';
import { FoodRecommendationDto } from './dto/food.dto';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    getRecommendations(dosha?: string): Promise<FoodRecommendationDto>;
}
