import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Textblock } from './textblock.model';
import { CreateTextblockDto } from './dto/create-textblock.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class TextblockService {

    constructor (@InjectModel(Textblock) private textblockRepository: typeof Textblock, 
    private filesService: FilesService) {}

    async create(dto: CreateTextblockDto, picture: any) {
        const fileName = await this.filesService.createFileTextBlock(picture);
        const textblock = await this.textblockRepository.create({...dto, picture: fileName});
        return textblock;
    }

    async getGroup(group: string) {
        const groups = await this.textblockRepository.findAll({where: {group}});
        return groups;
    }

}
