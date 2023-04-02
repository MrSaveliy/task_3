import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";

interface ProfileCreationAttrs {
    name: string;
    surname: string;
    phone: number;
}

@Table( {tableName: 'profile'})
export class Profile extends Model<Profile, ProfileCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false })
    name: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({type: DataType.STRING, allowNull: false })
    surname: string;

    @ApiProperty({example: '89876543210', description: 'Телефон'})
    @Column({type: DataType.INTEGER, allowNull: false })
    phone: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER,})
    userId: number;

    @BelongsTo(() => User)
    user: User;

}