import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { UserAnalyticsDto } from './dto/analytics.dto';
import { LogSessionDto } from './dto/log-session.dto';

@Injectable()
export class AnalyticsService {
    constructor(private prisma: PrismaService) { }

    async logSession(dto: LogSessionDto) {
        // For now, we'll use a hardcoded default user if none provided
        const userId = dto.userId || (await this.getOrCreateDefaultUser());

        return this.prisma.userSession.create({
            data: {
                userId,
                techniqueId: dto.techniqueId,
                duration: dto.duration,
            },
        });
    }

    async getUserAnalytics(userId?: string): Promise<UserAnalyticsDto> {
        const targetUserId = userId || (await this.getOrCreateDefaultUser());

        // 1. Get recent sessions
        const sessions = await this.prisma.userSession.findMany({
            where: { userId: targetUserId },
            orderBy: { timestamp: 'desc' },
            take: 20,
        });

        // 2. Calculate Streak
        const streak = await this.calculateStreak(targetUserId);

        // 3. Aggregate Stats (Mocked calculation for now, but ready for real DB grouping)
        // In a production app, we would use prisma.userSession.groupBy(...)
        const totalSessions = await this.prisma.userSession.count({
            where: { userId: targetUserId },
        });

        return {
            streak,
            totalTime: '5h 45m', // Logical parsing of '5 min' strings would happen here
            sessions: totalSessions,
            weeklyStats: [
                { label: 'Mon', value: 20 },
                { label: 'Tue', value: 45 },
                { label: 'Wed', value: 30 },
                { label: 'Thu', value: 60 },
                { label: 'Fri', value: 35 },
                { label: 'Sat', value: 50 },
                { label: 'Sun', value: 40 },
            ],
            monthlyStats: [
                { label: 'W1', value: 120 },
                { label: 'W2', value: 180 },
                { label: 'W3', value: 150 },
                { label: 'W4', value: 210 },
            ],
            recentProgress: sessions.map((s) => ({
                date: this.formatDateLabel(s.timestamp),
                technique: s.techniqueId,
                duration: s.duration,
                streak: streak, // Ideally, this would be the streak AT THAT TIME
            })),
        };
    }

    private async calculateStreak(userId: string): Promise<number> {
        const sessions = await this.prisma.userSession.findMany({
            where: { userId },
            orderBy: { timestamp: 'desc' },
            select: { timestamp: true },
        });

        if (sessions.length === 0) return 0;

        let streak = 0;
        const now = new Date();
        let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // Check if the most recent session was today or yesterday
        const lastSessionDate = new Date(
            sessions[0].timestamp.getFullYear(),
            sessions[0].timestamp.getMonth(),
            sessions[0].timestamp.getDate(),
        );

        const diffInDays = Math.floor((currentDate.getTime() - lastSessionDate.getTime()) / (1000 * 3600 * 24));

        if (diffInDays > 1) return 0; // Streak broken

        // Count consecutive unique days
        const uniqueDays = new Set(
            sessions.map((s) =>
                new Date(s.timestamp.getFullYear(), s.timestamp.getMonth(), s.timestamp.getDate()).getTime(),
            ),
        );

        const sortedDays = Array.from(uniqueDays).sort((a, b) => b - a);

        let checkDate = lastSessionDate;
        for (const dayTime of sortedDays) {
            const day = new Date(dayTime);
            const dayDiff = Math.floor((checkDate.getTime() - day.getTime()) / (1000 * 3600 * 24));

            if (dayDiff <= 1) {
                streak++;
                checkDate = day;
            } else {
                break;
            }
        }

        return streak;
    }

    private async getOrCreateDefaultUser() {
        let user = await this.prisma.user.findFirst();
        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: 'default@yoga.com',
                    name: 'Yoga Practitioner',
                },
            });
        }
        return user.id;
    }

    private formatDateLabel(date: Date): string {
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        return `${diffDays} days ago`;
    }
}
