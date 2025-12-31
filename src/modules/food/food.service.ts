import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { FoodRecommendationDto } from './dto/food.dto';

@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) { }

    async getRecommendations(userDosha: string = 'Vata-Pitta'): Promise<FoodRecommendationDto> {
        const currentMonth = new Date().getMonth(); // 0-11
        const season = this.getSeasonName(currentMonth);

        const menus = await this.prisma.foodMenu.findMany({
            where: {
                dosha: userDosha,
                season: { contains: season },
            },
        });

        return {
            dosha: userDosha,
            season: `${season} Season`,
            dailyMenu: menus.map((m) => ({
                time: m.timeOfDay,
                suggestion: m.suggestion,
                image: m.image,
                description: m.description,
                calories: m.calories,
                tags: JSON.parse(m.tags),
            })),
            avoid: this.getAvoidList(season, userDosha),
        };
    }

    private getSeasonName(month: number): string {
        if (month >= 2 && month <= 5) return 'Summer';
        if (month >= 6 && month <= 9) return 'Monsoon';
        return 'Winter';
    }

    private getAvoidList(season: string, dosha: string): string[] {
        if (season === 'Winter') {
            return ['Cold beverages', 'Excessive raw vegetables', 'Heavy desserts'];
        }
        if (season === 'Summer') {
            return ['Spicy foods', 'Caffeine', 'Extremely hot drinks'];
        }
        return ['Oily foods', 'Fermented items', 'Cold salads'];
    }
}
