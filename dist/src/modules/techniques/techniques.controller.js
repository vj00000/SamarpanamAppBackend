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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechniquesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const techniques_service_1 = require("./techniques.service");
const technique_dto_1 = require("./dto/technique.dto");
const technique_query_dto_1 = require("./dto/technique-query.dto");
let TechniquesController = class TechniquesController {
    techniquesService;
    constructor(techniquesService) {
        this.techniquesService = techniquesService;
    }
    async findAll(query) {
        return this.techniquesService.findAll(query);
    }
    async getFavorites(userId) {
        return this.techniquesService.getFavorites(userId);
    }
    async toggleFavorite(id, userId) {
        return this.techniquesService.toggleFavorite(id, userId);
    }
    async findFeatured() {
        return this.techniquesService.findFeatured();
    }
    async findOne(id, userId) {
        return this.techniquesService.findOne(id, userId);
    }
};
exports.TechniquesController = TechniquesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Search and filter techniques' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [technique_dto_1.TechniqueSummaryDto] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [technique_query_dto_1.TechniqueQueryDto]),
    __metadata("design:returntype", Promise)
], TechniquesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('favorites'),
    (0, swagger_1.ApiOperation)({ summary: 'Get favorite techniques for a user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [technique_dto_1.TechniqueSummaryDto] }),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TechniquesController.prototype, "getFavorites", null);
__decorate([
    (0, common_1.Post)(':id/favorite'),
    (0, swagger_1.ApiOperation)({ summary: 'Toggle favorite status for a technique' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TechniquesController.prototype, "toggleFavorite", null);
__decorate([
    (0, common_1.Get)('featured'),
    (0, swagger_1.ApiOperation)({ summary: 'Get featured techniques for home screen' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [technique_dto_1.TechniqueFeaturedDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TechniquesController.prototype, "findFeatured", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get details of a specific technique' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: technique_dto_1.TechniqueDetailDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Technique not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TechniquesController.prototype, "findOne", null);
exports.TechniquesController = TechniquesController = __decorate([
    (0, swagger_1.ApiTags)('Techniques'),
    (0, common_1.Controller)('techniques'),
    __metadata("design:paramtypes", [techniques_service_1.TechniquesService])
], TechniquesController);
//# sourceMappingURL=techniques.controller.js.map