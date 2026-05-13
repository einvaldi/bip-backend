import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { CvModule } from './cv/cv.module';
import { ChatModule } from './chat/chat.module';
import { ExchangeModule } from './exchange/exchange.module';
import { SophoneModule } from './sophone/sophone.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    ContactModule,
    CvModule,
    ChatModule,
    ExchangeModule,
    SophoneModule,
  ],
})
export class AppModule {}
