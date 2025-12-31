import { Module } from '@nestjs/common';
import { AdminTechniquesController } from './controllers/admin-techniques.controller';
import { AdminBlogsController } from './controllers/admin-blogs.controller';
import { AdminCategoriesController } from './controllers/admin-categories.controller';
import { AdminFoodController } from './controllers/admin-food.controller';
import { AdminTechniquesService } from './services/admin-techniques.service';
import { AdminBlogsService } from './services/admin-blogs.service';
import { AdminCategoriesService } from './services/admin-categories.service';
import { AdminFoodService } from './services/admin-food.service';
import { MediaModule } from '../media/media.module';

@Module({
    imports: [MediaModule],
    controllers: [
        AdminTechniquesController,
        AdminBlogsController,
        AdminCategoriesController,
        AdminFoodController,
    ],
    providers: [
        AdminTechniquesService,
        AdminBlogsService,
        AdminCategoriesService,
        AdminFoodService,
    ],
})
export class AdminModule { }
