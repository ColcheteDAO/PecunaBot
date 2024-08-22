import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './modules/bot.module';
import { BotService } from './services/bot.service';

@Module({
  imports: [BotModule],
  controllers: [AppController],
  providers: [AppService,BotService],
})
export class AppModule {}
