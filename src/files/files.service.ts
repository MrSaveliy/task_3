import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid'
import { InjectModel } from '@nestjs/sequelize';
import { Files } from './files.model';

@Injectable()
export class FilesService { 

    constructor (@InjectModel(Files) private filesRepository: typeof Files) {}

    async createFileTextBlock(file): Promise<string> {
        try {
            const filePath = path.resolve(__dirname, '..', 'static')
            const fileName = uuid.v4() + path.extname(filePath)
            if (!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException('Method not implemented.', HttpStatus.INTERNAL_SERVER_ERROR);  
        }
    }

    async delete(id: number): Promise<void> {
        const file = await this.filesRepository.findByPk(id);
        if (!file) {
          throw new Error('Фаил не найден');
        }
        await file.destroy();
    }
}