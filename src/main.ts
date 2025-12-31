import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable Static File Serving
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/public/',
  });



  // Enable CORS
  app.enableCors();

  // Global Validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Yoga & Pranayama API')
    .setDescription('The API for Yoga, Pranayama, Aahar, and Mindfulness')
    .setVersion('1.0')
    .addTag('yoga')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(8080);
  console.log(`Application is running on: http://localhost:8080`);
  console.log(`Swagger docs available at: http://localhost:8080/docs`);
}
bootstrap();

