import { Module } from '@nestjs/common';
import { BotService } from '../services/bot.service';

@Module({
  imports: [],
  providers: [BotService],
})
export class BotModule {}
