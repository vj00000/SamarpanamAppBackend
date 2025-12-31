import { TechniquesService } from './techniques.service';
import { TechniqueFeaturedDto, TechniqueDetailDto, TechniqueSummaryDto } from './dto/technique.dto';
import { TechniqueQueryDto } from './dto/technique-query.dto';
export declare class TechniquesController {
    private readonly techniquesService;
    constructor(techniquesService: TechniquesService);
    findAll(query: TechniqueQueryDto): Promise<TechniqueSummaryDto[]>;
    getFavorites(userId: string): Promise<TechniqueSummaryDto[]>;
    toggleFavorite(id: string, userId: string): Promise<{
        isFavorite: boolean;
    }>;
    findFeatured(): Promise<TechniqueFeaturedDto[]>;
    findOne(id: string, userId?: string): Promise<TechniqueDetailDto>;
}
