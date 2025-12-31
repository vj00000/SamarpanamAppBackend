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
exports.FoodRecommendationDto = exports.FoodMenuItemDto = exports.FoodMenuDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class FoodMenuDto {
    id;
    dosha;
    season;
    timeOfDay;
    suggestion;
    image;
    description;
    calories;
    tags;
}
exports.FoodMenuDto = FoodMenuDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "dosha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "season", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Morning' }),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "timeOfDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "suggestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuDto.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], FoodMenuDto.prototype, "tags", void 0);
class FoodMenuItemDto {
    time;
    suggestion;
    image;
    description;
    calories;
    tags;
}
exports.FoodMenuItemDto = FoodMenuItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuItemDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuItemDto.prototype, "suggestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuItemDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodMenuItemDto.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], FoodMenuItemDto.prototype, "tags", void 0);
class FoodRecommendationDto {
    dosha;
    season;
    dailyMenu;
    avoid;
}
exports.FoodRecommendationDto = FoodRecommendationDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodRecommendationDto.prototype, "dosha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], FoodRecommendationDto.prototype, "season", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [FoodMenuItemDto] }),
    __metadata("design:type", Array)
], FoodRecommendationDto.prototype, "dailyMenu", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], FoodRecommendationDto.prototype, "avoid", void 0);
//# sourceMappingURL=food.dto.js.map