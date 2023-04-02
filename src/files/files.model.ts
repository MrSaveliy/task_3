
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";


interface FilesCreationAttrs {
    path: string;
    fileName: string;
}

@Table( {tableName: 'files'})
export class Files extends Model<Files, FilesCreationAttrs > {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false })
    path: string;

    @Column({type: DataType.STRING, allowNull: false })
    fileName: string;

}