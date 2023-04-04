import { Body, Controller, Get, Param, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { TextblockService } from './textblock.service';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/role-auth.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/users/user.model';


@Controller('roles')
export class TextblockController {
    constructor(private textblockService: TextblockService) {}

    @ApiOperation({summary: "Создание текстого блока"})
    @ApiResponse({status: 200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post()
    @UseInterceptors(FileInterceptor('picture'))
    createTextblock(@Body() dto: CreateTextblockDto, @UploadedFile() picture) {
        return this.textblockService,this.createTextblock(dto, picture);
    }

    @Get('/:group')
    getByValue(@Param('group') group: string) {
        return this.textblockService.getGroup(group);

    }
}