import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: ['*', 'http://localhost:4200','api/*'],
    methods: ['*'],
  });
  console.log('port:', process.env.SERVER_PORT);
  // if (typeof(PhusionPassenger) != 'undefined') {
  //   app.listen('passenger');
  // } else {
  //   app.listen(3000);
  // }
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
