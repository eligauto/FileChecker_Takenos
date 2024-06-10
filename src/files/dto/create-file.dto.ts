// create-file.dto.ts
import { IsNotEmpty } from 'class-validator';
import { IsMimeType } from '../validators/mime-type.validator'; 
import { MaxFileSize } from '../validators/max-file-size.validator'; 

export class CreateFileDto {
  @IsNotEmpty()
  @MaxFileSize(5 * 1024 * 1024, {
    message: 'File size exceeds the maximum allowed size of 5MB',
  })
  file: any;

  @IsMimeType(['image/png', 'image/jpeg', 'application/pdf'], {
    message: 'Unsupported file format',
  })
  mimetype: string;
}

