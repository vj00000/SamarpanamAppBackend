import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { TechniquesModule } from './modules/techniques/techniques.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { FoodModule } from './modules/food/food.module';
import { PrismaModule } from './modules/common/prisma/prisma.module';
import { MediaModule } from './modules/media/media.module';
import { AdminModule } from './modules/admin/admin.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AdminModule,
    ChatModule,
    MediaModule,
    CategoriesModule,



    TechniquesModule,
    BlogsModule,
    AnalyticsModule,
    FoodModule,
  ],
})
export class AppModule { }

