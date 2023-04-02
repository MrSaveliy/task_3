import { Module } from '@nestjs/common';
import { TextblockController } from './textblock.controller';
import { TextblockService } from './textblock.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Textblock } from './textblock.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  controllers: [TextblockController],
  providers: [TextblockService],
  imports: [SequelizeModule.forFeature([Textblock]), FilesModule],
  exports:[]

})
export class TextblockModule {}
