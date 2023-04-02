import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { User } from "./users/user.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.module";
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from "./profile/profile.module";
import { Profile } from "./profile/profile.model";
import { ServeStaticModule } from "@nestjs/serve-static";

import * as path from "path";
import { Textblock } from "./textblock/textblock.model";
import { TextblockModule } from "./textblock/textblock.module";
import { FilesModule } from "./files/files.module";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        SequelizeModule.forRoot( {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Profile, Textblock],
            autoLoadModels: true
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        ProfileModule,
        TextblockModule,
        FilesModule
    ],
})

export class AppModule {}