import { PrismaService } from '../common/prisma/prisma.service';
import { UserAnalyticsDto } from './dto/analytics.dto';
import { LogSessionDto } from './dto/log-session.dto';
export declare class AnalyticsService {
    private prisma;
    constructor(prisma: PrismaService);
    logSession(dto: LogSessionDto): Promise<{
        id: string;
        duration: string;
        userId: string;
        techniqueId: string;
        timestamp: Date;
    }>;
    getUserAnalytics(userId?: string): Promise<UserAnalyticsDto>;
    private calculateStreak;
    private getOrCreateDefaultUser;
    private formatDateLabel;
}
