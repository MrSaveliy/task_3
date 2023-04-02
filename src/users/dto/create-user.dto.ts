import { ApiProperty } from "@nestjs/swagger/dist";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'Почтовый адрес'})
    readonly email: string;
    @ApiProperty({example: '12341234', description: 'Пароль пользователя'})
    readonly password: string;
}