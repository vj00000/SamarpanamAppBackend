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
exports.UserAnalyticsDto = exports.ProgressItemDto = exports.WeeklyStatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class WeeklyStatDto {
    label;
    value;
}
exports.WeeklyStatDto = WeeklyStatDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], WeeklyStatDto.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], WeeklyStatDto.prototype, "value", void 0);
class ProgressItemDto {
    date;
    technique;
    duration;
    streak;
}
exports.ProgressItemDto = ProgressItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProgressItemDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProgressItemDto.prototype, "technique", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProgressItemDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProgressItemDto.prototype, "streak", void 0);
class UserAnalyticsDto {
    streak;
    totalTime;
    sessions;
    weeklyStats;
    monthlyStats;
    recentProgress;
}
exports.UserAnalyticsDto = UserAnalyticsDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UserAnalyticsDto.prototype, "streak", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserAnalyticsDto.prototype, "totalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UserAnalyticsDto.prototype, "sessions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WeeklyStatDto] }),
    __metadata("design:type", Array)
], UserAnalyticsDto.prototype, "weeklyStats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [WeeklyStatDto] }),
    __metadata("design:type", Array)
], UserAnalyticsDto.prototype, "monthlyStats", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ProgressItemDto] }),
    __metadata("design:type", Array)
], UserAnalyticsDto.prototype, "recentProgress", void 0);
//# sourceMappingURL=analytics.dto.js.map