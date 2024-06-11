import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { memoryStorage } from 'multer';
import { UploadFileDto } from './dto/upload-file.dto';

@Controller('upload')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new BadRequestException('Solo se permiten archivos .png, .jpg y .pdf'), false);
      }
    },
  }))
  async uploadFile(@UploadedFile() file: UploadFileDto) {
    if (!file) {
      throw new BadRequestException('No se ha subido ningún archivo.');
    }
    try {
      const url = await this.fileService.uploadFile(file);
      return { url };
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      throw new InternalServerErrorException('Error al subir el archivo');
    }
  }
}
