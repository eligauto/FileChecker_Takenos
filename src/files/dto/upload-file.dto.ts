import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { IsBuffer } from '../decorators/is-buffer.decorator';

export class UploadFileDto {
  @IsNotEmpty()
  @IsString()
  fieldname: string;

  @IsNotEmpty()
  @IsString()
  originalname: string;

  @IsNotEmpty()
  @IsString()
  encoding: string;

  @IsNotEmpty()
  @IsString()
  mimetype: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  @IsBuffer()
  buffer: Buffer;
}
