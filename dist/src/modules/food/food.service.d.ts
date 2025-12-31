import { PrismaService } from '../common/prisma/prisma.service';
import { FoodRecommendationDto } from './dto/food.dto';
export declare class FoodService {
    private prisma;
    constructor(prisma: PrismaService);
    getRecommendations(userDosha?: string): Promise<FoodRecommendationDto>;
    private getSeasonName;
    private getAvoidList;
}
