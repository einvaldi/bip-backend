import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExchangeService {
  constructor(private prisma: PrismaService) {}

  async createLead(data: any) {
    return this.prisma.exchangeLead.create({ data });
  }

  async findAll() {
    return this.prisma.exchangeLead.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
