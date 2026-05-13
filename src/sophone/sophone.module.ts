import { Module } from '@nestjs/common';
import { SophoneService } from './sophone.service';
import { SophoneController } from './sophone.controller';

@Module({
  controllers: [SophoneController],
  providers: [SophoneService],
})
export class SophoneModule {}
