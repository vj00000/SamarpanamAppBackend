import { PrismaService } from '../common/prisma/prisma.service';
import { TechniqueFeaturedDto, TechniqueDetailDto, TechniqueSummaryDto } from './dto/technique.dto';
import { TechniqueQueryDto } from './dto/technique-query.dto';
export declare class TechniquesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query: TechniqueQueryDto): Promise<TechniqueSummaryDto[]>;
    findFeatured(): Promise<TechniqueFeaturedDto[]>;
    findOne(id: string, userId?: string): Promise<TechniqueDetailDto>;
    toggleFavorite(techniqueId: string, userId: string): Promise<{
        isFavorite: boolean;
    }>;
    getFavorites(userId: string): Promise<TechniqueSummaryDto[]>;
}
