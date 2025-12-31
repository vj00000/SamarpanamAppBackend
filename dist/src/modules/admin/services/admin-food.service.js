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
exports.AdminFoodService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AdminFoodService = class AdminFoodService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.foodMenu.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.foodMenu.findUnique({
            where: { id },
        });
    }
    async create(dto) {
        return this.prisma.foodMenu.create({
            data: {
                ...dto,
                tags: JSON.stringify(dto.tags),
            },
        });
    }
    async update(id, dto) {
        const data = { ...dto };
        if (dto.tags)
            data.tags = JSON.stringify(dto.tags);
        return this.prisma.foodMenu.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.foodMenu.delete({ where: { id } });
    }
};
exports.AdminFoodService = AdminFoodService;
exports.AdminFoodService = AdminFoodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminFoodService);
//# sourceMappingURL=admin-food.service.js.map