import { Body, Controller, Delete, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFilesDto } from './dto/create-files.dto';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {

    constructor(private filesService: FilesService) {}

    
    @Post()
    @UseInterceptors(FileInterceptor('picture'))
    createTextblock(@Body() dto: CreateFilesDto, @UploadedFile() picture) {
        return this.filesService,this.createTextblock(dto, picture);
    }
   
    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
       return await this.filesService.delete(id);
  }


}
