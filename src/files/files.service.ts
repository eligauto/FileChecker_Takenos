import { Injectable, BadRequestException } from '@nestjs/common';
import { Multer } from 'multer';
import axios from 'axios';

@Injectable()
export class FilesService {

  async uploadFile(file: Multer.File): Promise<any> {
    const uploadUrl = process.env.UPLOADTHING_URL;
    console.log('uploadUrl', uploadUrl)
    try {
      const response = await axios.post(uploadUrl, file.buffer, {
        headers: {
          'Content-Type': file.mimetype,
        },
      });
      console.log('response', response)
      return response.data;
    } catch (error) {
      throw new BadRequestException('Error uploading file: ' + error.message);
    }
  }
}



