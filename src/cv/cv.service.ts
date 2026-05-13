import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CvService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, file?: Express.Multer.File) {
    const cv = await this.prisma.cvApplication.create({
      data: {
        ...data,
        fileName: file?.originalname || null,
        // fileUrl: uploadToS3(file) // TODO: implementar S3/Cloudinary
      },
    });
    return cv;
  }

  async findAll() {
    return this.prisma.cvApplication.findMany({ orderBy: { createdAt: 'desc' } });
  }
}
