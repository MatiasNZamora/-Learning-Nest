import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2'); // pone el prefijo /api/v2/... a todos los controladores de forma global.

  await app.listen(4000);
};

bootstrap();