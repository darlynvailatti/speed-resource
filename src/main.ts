import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BussinesExceptionFilter } from './common/exceptions.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Speed-Resource')
    .setDescription('Speed Resource API')
    .setVersion('1.0')
    .addTag('team')
    .addTag('test-environment')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new BussinesExceptionFilter());
  await app.listen(3000);
}
bootstrap();
