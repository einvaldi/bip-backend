import { Controller, Post, Get, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CvService } from './cv.service';

@Controller('api/cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    return this.cvService.create(body, file);
  }

  @Get()
  findAll() {
    return this.cvService.findAll();
  }
}
