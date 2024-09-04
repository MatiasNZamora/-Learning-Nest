import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({ // paso la validacion de pipes a nivel global de la aplicacion
    whitelist: true, // limpia los datos extras o no solicitados del cuerpo de la peticion
    forbidNonWhitelisted: true, // envia una respuesta 400 diciendo las propiedades extras o no solicitas. 
  }))
  await app.listen(4000);
}

bootstrap();
