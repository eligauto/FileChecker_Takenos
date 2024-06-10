import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    FilesModule,
    MulterModule.register({
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/png', 'image/jpeg', 'application/pdf'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
          cb(new Error('Unsupported file format'), false);
        } else {
          cb(null, true);
        }
      },
    }),
  ],
  providers: [],
})
export class AppModule {}

