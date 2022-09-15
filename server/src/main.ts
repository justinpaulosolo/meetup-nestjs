import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  try {
    await app.listen(5000);
    console.log('Running on port 5000');
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
