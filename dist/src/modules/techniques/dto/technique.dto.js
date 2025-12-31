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
exports.TechniqueDetailDto = exports.TechniqueFeaturedDto = exports.TechniqueSummaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TechniqueSummaryDto {
    id;
    title;
    duration;
    level;
    image;
}
exports.TechniqueSummaryDto = TechniqueSummaryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], TechniqueSummaryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Anulom Vilom' }),
    __metadata("design:type", String)
], TechniqueSummaryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10 min' }),
    __metadata("design:type", String)
], TechniqueSummaryDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Beginner' }),
    __metadata("design:type", String)
], TechniqueSummaryDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b' }),
    __metadata("design:type", String)
], TechniqueSummaryDto.prototype, "image", void 0);
class TechniqueFeaturedDto {
    id;
    title;
    duration;
    level;
    image;
    visualType;
    visualRatio;
    isFavorite;
}
exports.TechniqueFeaturedDto = TechniqueFeaturedDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fire-gaze' }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fire Gaze Breath' }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5 min' }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Advanced' }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fire-gaze', required: false }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "visualType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4:4:4:4', required: false }),
    __metadata("design:type", String)
], TechniqueFeaturedDto.prototype, "visualRatio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], TechniqueFeaturedDto.prototype, "isFavorite", void 0);
class TechniqueDetailDto {
    id;
    title;
    subtitle;
    difficulty;
    duration;
    image;
    videoUrl;
    visualType;
    visualRatio;
    description;
    steps;
    benefits;
    precautions;
    isFavorite;
}
exports.TechniqueDetailDto = TechniqueDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fire-gaze' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fire Gaze Breath' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Agni Drishti Pranayama' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Advanced' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '5 minutes' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://example.com/video.mp4', required: false }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "videoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'fire-gaze' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "visualType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4:4:4:4' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "visualRatio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'An advanced visualization-based breathing technique...' }),
    __metadata("design:type", String)
], TechniqueDetailDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Posture: Sit upright...', 'Focus: Keep eyes open...'] }),
    __metadata("design:type", Array)
], TechniqueDetailDto.prototype, "steps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Improves concentration', 'Generates internal heat'] }),
    __metadata("design:type", Array)
], TechniqueDetailDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Avoid if you have high blood pressure'] }),
    __metadata("design:type", Array)
], TechniqueDetailDto.prototype, "precautions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], TechniqueDetailDto.prototype, "isFavorite", void 0);
//# sourceMappingURL=technique.dto.js.map