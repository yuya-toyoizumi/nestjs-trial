import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('nestjs-trial')
      .setDescription('This is NestJS trial.')
      .setVersion('1.0.0')
      .addTag('trial')
      .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document)
  }

  await app.listen(process.env.PORT);
}
bootstrap();
