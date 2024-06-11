import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryProvider } from 'src/config/cloudinary.config';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [FilesService, CloudinaryProvider, ConfigService],
  controllers: [FilesController]
})
export class FilesModule {}
