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
exports.TechniqueQueryDto = exports.Difficulty = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Difficulty;
(function (Difficulty) {
    Difficulty["BEGINNER"] = "Beginner";
    Difficulty["INTERMEDIATE"] = "Intermediate";
    Difficulty["ADVANCED"] = "Advanced";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
class TechniqueQueryDto {
    search;
    difficulty;
    category;
}
exports.TechniqueQueryDto = TechniqueQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TechniqueQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: Difficulty }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(Difficulty),
    __metadata("design:type", String)
], TechniqueQueryDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TechniqueQueryDto.prototype, "category", void 0);
//# sourceMappingURL=technique-query.dto.js.map