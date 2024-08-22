import { Injectable } from '@nestjs/common';
import Bot from "../models/Bot" 
@Injectable()
export class BotService {
  startBot() {
    const bot = new Bot();
    return bot.start();
  }
}
