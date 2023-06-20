import { Module } from '@nestjs/common';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ImagesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/Images'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
