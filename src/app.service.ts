import { Injectable } from '@nestjs/common';
import { BotService } from './services/bot.service';

@Injectable()
export class AppService {
  constructor(
    private botService: BotService
  ){

  }
  getHello(): string {
    return this.botService.startBot();
  }
}
