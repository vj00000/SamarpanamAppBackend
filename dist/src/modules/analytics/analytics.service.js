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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async logSession(dto) {
        const userId = dto.userId || (await this.getOrCreateDefaultUser());
        return this.prisma.userSession.create({
            data: {
                userId,
                techniqueId: dto.techniqueId,
                duration: dto.duration,
            },
        });
    }
    async getUserAnalytics(userId) {
        const targetUserId = userId || (await this.getOrCreateDefaultUser());
        const sessions = await this.prisma.userSession.findMany({
            where: { userId: targetUserId },
            orderBy: { timestamp: 'desc' },
            take: 20,
        });
        const streak = await this.calculateStreak(targetUserId);
        const totalSessions = await this.prisma.userSession.count({
            where: { userId: targetUserId },
        });
        return {
            streak,
            totalTime: '5h 45m',
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
                streak: streak,
            })),
        };
    }
    async calculateStreak(userId) {
        const sessions = await this.prisma.userSession.findMany({
            where: { userId },
            orderBy: { timestamp: 'desc' },
            select: { timestamp: true },
        });
        if (sessions.length === 0)
            return 0;
        let streak = 0;
        const now = new Date();
        let currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastSessionDate = new Date(sessions[0].timestamp.getFullYear(), sessions[0].timestamp.getMonth(), sessions[0].timestamp.getDate());
        const diffInDays = Math.floor((currentDate.getTime() - lastSessionDate.getTime()) / (1000 * 3600 * 24));
        if (diffInDays > 1)
            return 0;
        const uniqueDays = new Set(sessions.map((s) => new Date(s.timestamp.getFullYear(), s.timestamp.getMonth(), s.timestamp.getDate()).getTime()));
        const sortedDays = Array.from(uniqueDays).sort((a, b) => b - a);
        let checkDate = lastSessionDate;
        for (const dayTime of sortedDays) {
            const day = new Date(dayTime);
            const dayDiff = Math.floor((checkDate.getTime() - day.getTime()) / (1000 * 3600 * 24));
            if (dayDiff <= 1) {
                streak++;
                checkDate = day;
            }
            else {
                break;
            }
        }
        return streak;
    }
    async getOrCreateDefaultUser() {
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
    formatDateLabel(date) {
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 0)
            return 'Today';
        if (diffDays === 1)
            return 'Yesterday';
        return `${diffDays} days ago`;
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map