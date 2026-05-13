import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateContactDto) {
    const contact = await this.prisma.contact.create({ data: dto });
    // TODO: Integrar con ATOM-OS Agent para responder automáticamente
    // await this.atomOsAgent.notify('Nuevo contacto: ' + dto.email);
    return contact;
  }

  async findAll() {
    return this.prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
