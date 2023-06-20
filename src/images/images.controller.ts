import {
  Controller,
  HttpStatus,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameImage, fileFilter } from './helper/images.helper';
import { ImagesService } from './images.service';
import { Response } from 'express';

@Controller('images')
export class ImagesController {
  //   @Post('upload')
  //   @UseInterceptors(FileInterceptor('file'))
  //   uploadFile(@UploadedFile() file: Express.Multer.File) {
  //     console.log(file.fieldname);
  //   }
  constructor(private readonly imgService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: renameImage,
      }),
      fileFilter: fileFilter,
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    // return await this.imgService.uploadFile({ filename: file.fieldname });
    await this.imgService.uploadFile({ filename: file.fieldname });

    return res.status(HttpStatus.OK).json({
      message: 'Saved image',
      fileName: file.fieldname,
    });
  }
}
