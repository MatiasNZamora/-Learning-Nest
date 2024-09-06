import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2'); // pone el prefijo /api/v2/... a todos los controladores de forma global.

  app.useGlobalPipes( // agrego las validaciones de forma global del class validator.
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }) 
  );

  await app.listen(4000);
};

bootstrap();