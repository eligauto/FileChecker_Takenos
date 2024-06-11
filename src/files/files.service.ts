import { Injectable, Inject } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { MulterFile } from './interfaces/multer.interface';

@Injectable()
export class FilesService {
  constructor(@Inject('Cloudinary') private cloudinary) {}

  async uploadFile(file: MulterFile): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
        if (error) {
          console.error('Error al subir el archivo a Cloudinary:', error);
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }).end(file.buffer);
    });
  }
}


