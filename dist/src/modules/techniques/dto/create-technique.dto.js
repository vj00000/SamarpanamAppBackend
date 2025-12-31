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
exports.CreateTechniqueDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTechniqueDto {
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
    isFeatured;
    categoryId;
}
exports.CreateTechniqueDto = CreateTechniqueDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'new-breathe-technique' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Sitali Pranayama' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cooling Breath' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "subtitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Beginner' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '10 minutes' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://images.unsplash.com/...' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'http://localhost:8080/public/videos/...', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "videoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'circle', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "visualType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4:4:4:4', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "visualRatio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A refreshing and cooling breathing practice.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Sit comfortably', 'Curl your tongue', 'Inhale through tongue'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateTechniqueDto.prototype, "steps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Cools the body', 'Reduces anxiety'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateTechniqueDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Avoid if you have a cold'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateTechniqueDto.prototype, "precautions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, default: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateTechniqueDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTechniqueDto.prototype, "categoryId", void 0);
//# sourceMappingURL=create-technique.dto.js.map