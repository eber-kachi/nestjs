import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [    ConfigModule.forRoot({
    envFilePath: ['.env', '.env.development'],
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
