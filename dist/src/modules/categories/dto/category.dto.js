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
exports.CategoryDetailDto = exports.CategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const technique_dto_1 = require("../../techniques/dto/technique.dto");
class CategoryDto {
    id;
    title;
    icon;
    color;
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pranayama' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '🧘' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '#8B9467' }),
    __metadata("design:type", String)
], CategoryDto.prototype, "color", void 0);
class CategoryDetailDto extends CategoryDto {
    description;
    image;
    techniques;
}
exports.CategoryDetailDto = CategoryDetailDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Control your breath, control your life.' }),
    __metadata("design:type", String)
], CategoryDetailDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773' }),
    __metadata("design:type", String)
], CategoryDetailDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [technique_dto_1.TechniqueSummaryDto] }),
    __metadata("design:type", Array)
], CategoryDetailDto.prototype, "techniques", void 0);
//# sourceMappingURL=category.dto.js.map