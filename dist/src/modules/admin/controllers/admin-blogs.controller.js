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
exports.AdminBlogsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const admin_blogs_service_1 = require("../services/admin-blogs.service");
const create_blog_dto_1 = require("../../blogs/dto/create-blog.dto");
const update_blog_dto_1 = require("../../blogs/dto/update-blog.dto");
const blog_dto_1 = require("../../blogs/dto/blog.dto");
let AdminBlogsController = class AdminBlogsController {
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
exports.AdminBlogsController = AdminBlogsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all blogs (Admin view)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminBlogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single blog by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminBlogsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new blog post' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: blog_dto_1.BlogDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", Promise)
], AdminBlogsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a blog post' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", Promise)
], AdminBlogsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a blog post' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminBlogsController.prototype, "remove", null);
exports.AdminBlogsController = AdminBlogsController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Blogs'),
    (0, common_1.Controller)('admin/blogs'),
    __metadata("design:paramtypes", [admin_blogs_service_1.AdminBlogsService])
], AdminBlogsController);
//# sourceMappingURL=admin-blogs.controller.js.map