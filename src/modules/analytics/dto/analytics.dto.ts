import { ApiProperty } from '@nestjs/swagger';

export class WeeklyStatDto {
    @ApiProperty()
    label: string;
    @ApiProperty()
    value: number;
}

export class ProgressItemDto {
    @ApiProperty()
    date: string;
    @ApiProperty()
    technique: string;
    @ApiProperty()
    duration: string;
    @ApiProperty()
    streak: number;
}

export class UserAnalyticsDto {
    @ApiProperty()
    streak: number;
    @ApiProperty()
    totalTime: string;
    @ApiProperty()
    sessions: number;
    @ApiProperty({ type: [WeeklyStatDto] })
    weeklyStats: WeeklyStatDto[];
    @ApiProperty({ type: [WeeklyStatDto] })
    monthlyStats: WeeklyStatDto[];
    @ApiProperty({ type: [ProgressItemDto] })
    recentProgress: ProgressItemDto[];
}
