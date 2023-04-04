import { Module, forwardRef } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Files } from './files.model';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  providers: [FilesService], 
  exports: [FilesService], 
  controllers: [FilesController],
  imports: [SequelizeModule.forFeature([Files]), forwardRef(() => AuthModule)]
})

export class FilesModule {}
