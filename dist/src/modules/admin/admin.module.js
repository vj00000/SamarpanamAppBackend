"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_techniques_controller_1 = require("./controllers/admin-techniques.controller");
const admin_blogs_controller_1 = require("./controllers/admin-blogs.controller");
const admin_categories_controller_1 = require("./controllers/admin-categories.controller");
const admin_food_controller_1 = require("./controllers/admin-food.controller");
const admin_techniques_service_1 = require("./services/admin-techniques.service");
const admin_blogs_service_1 = require("./services/admin-blogs.service");
const admin_categories_service_1 = require("./services/admin-categories.service");
const admin_food_service_1 = require("./services/admin-food.service");
const media_module_1 = require("../media/media.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [media_module_1.MediaModule],
        controllers: [
            admin_techniques_controller_1.AdminTechniquesController,
            admin_blogs_controller_1.AdminBlogsController,
            admin_categories_controller_1.AdminCategoriesController,
            admin_food_controller_1.AdminFoodController,
        ],
        providers: [
            admin_techniques_service_1.AdminTechniquesService,
            admin_blogs_service_1.AdminBlogsService,
            admin_categories_service_1.AdminCategoriesService,
            admin_food_service_1.AdminFoodService,
        ],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map