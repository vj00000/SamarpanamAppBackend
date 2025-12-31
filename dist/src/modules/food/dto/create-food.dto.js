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
exports.CreateFoodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateFoodDto {
    dosha;
    season;
    timeOfDay;
    suggestion;
    image;
    description;
    calories;
    tags;
}
exports.CreateFoodDto = CreateFoodDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Vata' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "dosha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Summer' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "season", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Morning' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "timeOfDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Oatmeal with Almonds' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "suggestion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://images.unsplash.com/...' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'A warm and grounding breakfast.' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '350 kcal' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "calories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['Warm', 'Oily'] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateFoodDto.prototype, "tags", void 0);
//# sourceMappingURL=create-food.dto.js.map