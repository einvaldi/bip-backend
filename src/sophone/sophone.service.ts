import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SophoneService {
  constructor(private prisma: PrismaService) {}

  async logCall(data: any) {
    return this.prisma.sophoneCall.create({ data });
  }
}
