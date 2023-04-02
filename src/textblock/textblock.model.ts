import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";

interface TextblockCreationAttrs {
    uniqeName: string;
    name: string;
    picture: string;
    text: string;
    group: string
}

@Table( {tableName: 'textblock'})
export class Textblock extends Model<Textblock, TextblockCreationAttrs > {
    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false })
    uniqueName: string;
    
    @Column({type: DataType.STRING,  allowNull: false })
    name: string;
    
    @Column({type: DataType.STRING,  allowNull: true })
    picture: string;
    
    @Column({type: DataType.TEXT, allowNull: true })
    text: string;

    @Column({type: DataType.STRING, unique: true, allowNull: true })
    group: string;


}