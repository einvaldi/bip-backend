import { Controller, Post, Body } from '@nestjs/common';
import { SophoneService } from './sophone.service';

@Controller('api/sophone')
export class SophoneController {
  constructor(private readonly sophoneService: SophoneService) {}

  @Post('call')
  logCall(@Body() body: any) {
    return this.sophoneService.logCall(body);
  }
}
