"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads'), {
        prefix: '/public/',
    });
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Yoga & Pranayama API')
        .setDescription('The API for Yoga, Pranayama, Aahar, and Mindfulness')
        .setVersion('1.0')
        .addTag('yoga')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(8080);
    console.log(`Application is running on: http://localhost:8080`);
    console.log(`Swagger docs available at: http://localhost:8080/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map