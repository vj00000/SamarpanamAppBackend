import { AnalyticsService } from './analytics.service';
import { UserAnalyticsDto } from './dto/analytics.dto';
import { LogSessionDto } from './dto/log-session.dto';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getUserAnalytics(userId?: string): Promise<UserAnalyticsDto>;
    logSession(logSessionDto: LogSessionDto): Promise<{
        id: string;
        duration: string;
        userId: string;
        techniqueId: string;
        timestamp: Date;
    }>;
}
