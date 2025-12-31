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
exports.AdminTechniquesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const admin_techniques_service_1 = require("../services/admin-techniques.service");
const create_technique_dto_1 = require("../../techniques/dto/create-technique.dto");
const update_technique_dto_1 = require("../../techniques/dto/update-technique.dto");
const technique_dto_1 = require("../../techniques/dto/technique.dto");
let AdminTechniquesController = class AdminTechniquesController {
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
    async createWithVideo(createTechniqueDto, file) {
        return this.adminService.create(createTechniqueDto, file);
    }
    async update(id, updateTechniqueDto) {
        return this.adminService.update(id, updateTechniqueDto);
    }
    async remove(id) {
        return this.adminService.remove(id);
    }
};
exports.AdminTechniquesController = AdminTechniquesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all techniques (Admin view)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminTechniquesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a single technique by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminTechniquesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('with-video'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new technique and upload its video simultaneously' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiResponse)({ status: 201, type: technique_dto_1.TechniqueDetailDto }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                subtitle: { type: 'string' },
                difficulty: { type: 'string' },
                duration: { type: 'string' },
                image: { type: 'string' },
                description: { type: 'string' },
                categoryId: { type: 'string' },
                isFeatured: { type: 'boolean' },
                steps: { type: 'array', items: { type: 'string' } },
                benefits: { type: 'array', items: { type: 'string' } },
                precautions: { type: 'array', items: { type: 'string' } },
                video: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/videos',
            filename: (req, file, cb) => {
                const techniqueId = req.body.id;
                if (techniqueId) {
                    return cb(null, `${techniqueId}${(0, path_1.extname)(file.originalname)}`);
                }
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 50 * 1024 * 1024 }),
        ],
        fileIsRequired: false,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_technique_dto_1.CreateTechniqueDto, Object]),
    __metadata("design:returntype", Promise)
], AdminTechniquesController.prototype, "createWithVideo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a technique' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_technique_dto_1.UpdateTechniqueDto]),
    __metadata("design:returntype", Promise)
], AdminTechniquesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a technique' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminTechniquesController.prototype, "remove", null);
exports.AdminTechniquesController = AdminTechniquesController = __decorate([
    (0, swagger_1.ApiTags)('Admin / Techniques'),
    (0, common_1.Controller)('admin/techniques'),
    __metadata("design:paramtypes", [admin_techniques_service_1.AdminTechniquesService])
], AdminTechniquesController);
//# sourceMappingURL=admin-techniques.controller.js.map