import { Body, Controller, Delete, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFilesDto } from './dto/create-files.dto';
import { FilesService } from './files.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { User } from 'src/users/user.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/role-auth.decorator';
@Controller('files')
export class FilesController {

    constructor(private filesService: FilesService) {}

    
    @Post()
    @UseInterceptors(FileInterceptor('picture'))
    createTextblock(@Body() dto: CreateFilesDto, @UploadedFile() picture) {
        return this.filesService,this.createTextblock(dto, picture);
    }
   
    @ApiOperation({summary: "Получить всех пользователей"})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
       return await this.filesService.delete(id);
  }


}
