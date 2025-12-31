"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let FoodService = class FoodService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getRecommendations(userDosha = 'Vata-Pitta') {
        const currentMonth = new Date().getMonth();
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
    getSeasonName(month) {
        if (month >= 2 && month <= 5)
            return 'Summer';
        if (month >= 6 && month <= 9)
            return 'Monsoon';
        return 'Winter';
    }
    getAvoidList(season, dosha) {
        if (season === 'Winter') {
            return ['Cold beverages', 'Excessive raw vegetables', 'Heavy desserts'];
        }
        if (season === 'Summer') {
            return ['Spicy foods', 'Caffeine', 'Extremely hot drinks'];
        }
        return ['Oily foods', 'Fermented items', 'Cold salads'];
    }
};
exports.FoodService = FoodService;
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FoodService);
//# sourceMappingURL=food.service.js.map