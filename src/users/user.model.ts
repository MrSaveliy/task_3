import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Profile } from "src/profile/profile.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.module";

interface UserCreationAttrs {
    email: string;
    password: string
}

@Table( {tableName: 'users'})
export class User extends Model<User, UserCreationAttrs > {

    @ApiProperty({example: '1', description: 'Уникальный индентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'user@mail.com', description: 'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '12341234', description: 'Пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({example: 'За нарушение правил сайта', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasOne(() => Profile)
    profile: Profile[];

}