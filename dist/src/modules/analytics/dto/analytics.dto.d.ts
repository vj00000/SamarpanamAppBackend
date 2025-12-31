export declare class WeeklyStatDto {
    label: string;
    value: number;
}
export declare class ProgressItemDto {
    date: string;
    technique: string;
    duration: string;
    streak: number;
}
export declare class UserAnalyticsDto {
    streak: number;
    totalTime: string;
    sessions: number;
    weeklyStats: WeeklyStatDto[];
    monthlyStats: WeeklyStatDto[];
    recentProgress: ProgressItemDto[];
}
