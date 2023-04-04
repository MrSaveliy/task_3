import { Module, forwardRef } from '@nestjs/common';
import { TextblockController } from './textblock.controller';
import { TextblockService } from './textblock.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Textblock } from './textblock.model';
import { FilesModule } from 'src/files/files.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TextblockController],
  providers: [TextblockService],
  imports: [SequelizeModule.forFeature([Textblock]),forwardRef(() => AuthModule), FilesModule],
  exports:[]

})
export class TextblockModule {}
