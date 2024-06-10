import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { ParseFilePipe } from '@nestjs/common';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile(ParseFilePipe) file: CreateFileDto) {
    try {
      const result = await this.filesService.uploadFile(file);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

