import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryProvider } from './config/cloudinary.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FilesModule,
  ],
  providers: [CloudinaryProvider],
  controllers: [],
})
export class AppModule {}

