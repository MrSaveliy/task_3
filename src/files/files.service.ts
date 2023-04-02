import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid'

@Injectable()
export class FilesService { 
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
}