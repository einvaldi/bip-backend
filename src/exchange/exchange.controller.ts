import { Controller, Post, Get, Body } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller('api/exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Post('lead')
  createLead(@Body() body: any) {
    return this.exchangeService.createLead(body);
  }

  @Get('leads')
  findAll() {
    return this.exchangeService.findAll();
  }
}
