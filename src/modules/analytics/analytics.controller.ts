import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { UserAnalyticsDto } from './dto/analytics.dto';
import { LogSessionDto } from './dto/log-session.dto';

@ApiTags('User Analytics')
@Controller('user/analytics')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService) { }

    @Get()
    @ApiOperation({ summary: 'Get current user session analytics' })
    @ApiResponse({ status: 200, type: UserAnalyticsDto })
    async getUserAnalytics(@Query('userId') userId?: string): Promise<UserAnalyticsDto> {
        return this.analyticsService.getUserAnalytics(userId);
    }

    @Post('log')
    @ApiOperation({ summary: 'Log a completed breathing/yoga session' })
    @ApiResponse({ status: 201, description: 'Session logged successfully' })
    async logSession(@Body() logSessionDto: LogSessionDto) {
        return this.analyticsService.logSession(logSessionDto);
    }
}
