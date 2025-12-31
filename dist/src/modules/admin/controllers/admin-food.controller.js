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
exports.AdminFoodController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_food_service_1 = require("../services/admin-food.service");
const create_food_dto_1 = require("../../food/dto/create-food.dto");
const update_food_dto_1 = require("../../food/dto/update-food.dto");
const food_dto_1 = require("../../food/dto/food.dto");
let AdminFoodController = class AdminFoodController {
    adminService;
    constructor(adminService) {
        this.adminService = adminService;
    }
    async findAll() {
        return this.adminService.findAll();
    }
    async findOne(id) {
        return this.adminService.findOne(id);
    }
    async create(dto) {
        return this.adminService.create(dto);
    }
    async update(id, dto) {
        return this.adminService.update(id, dto);
    }
    async remove(id) {
        return this.adminService.remove(id);
    }
};
exports.AdminFoodController = AdminFoodController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all food items (Admin view)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminFoodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single food item by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminFoodController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new food recommendation' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: food_dto_1.FoodMenuDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_food_dto_1.CreateFoodDto]),
    __metadata("design:returntype", Promise)
], AdminFoodController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a food recommendation' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_food_dto_1.UpdateFoodDto]),
    __metadata("design:returntype", Promise)
], AdminFoodController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a food recommendation' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminFoodController.prototype, "remove", null);
exports.AdminFoodController = AdminFoodController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Food'),
    (0, common_1.Controller)('admin/food'),
    __metadata("design:paramtypes", [admin_food_service_1.AdminFoodService])
], AdminFoodController);
//# sourceMappingURL=admin-food.controller.js.map