import { Injectable, UploadedFile } from '@nestjs/common';
import { Model } from 'mongoose';
import { Images } from './interface/image.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ImagesDto } from './dto/images.dto';

@Injectable()
export class ImagesService {
  constructor(@InjectModel('Images') private imagesModel: Model<Images>) {}

  async uploadFile(fileName: ImagesDto) {
    const file = new this.imagesModel(fileName); //instncia.

    return await file.save();
  }
}
