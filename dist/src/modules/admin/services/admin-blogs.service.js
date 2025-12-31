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
exports.AdminBlogsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let AdminBlogsService = class AdminBlogsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.blog.findUnique({
            where: { id },
        });
    }
    async create(dto) {
        return this.prisma.blog.create({
            data: {
                ...dto,
                tags: JSON.stringify(dto.tags),
                content: JSON.stringify(dto.content),
            },
        });
    }
    async update(id, dto) {
        const data = { ...dto };
        if (dto.tags)
            data.tags = JSON.stringify(dto.tags);
        if (dto.content)
            data.content = JSON.stringify(dto.content);
        return this.prisma.blog.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.blog.delete({ where: { id } });
    }
};
exports.AdminBlogsService = AdminBlogsService;
exports.AdminBlogsService = AdminBlogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminBlogsService);
//# sourceMappingURL=admin-blogs.service.js.map