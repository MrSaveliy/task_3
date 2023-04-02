import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { toNamespacedPath } from 'node:path/win32';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { Profile } from 'src/profile/profile.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepositoriy: typeof User,
                    private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepositoriy.create(dto);
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAll() {
        const users = await this.userRepositoriy.findAll({include: {all: true}});
        return users;
        
    }

    async getUsersByEmail(email: string) {
        const user = await this.userRepositoriy.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async addRole(dto: AddRoleDto  ) {
        const user = await this.userRepositoriy.findByPk(dto.userId);
        const role = await this.roleService .getRoleByValue(dto.value);
        if (user && role) {
            await user.$add('role', role.id)
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async ban(dto: BanUserDto) {
        const user = await this.userRepositoriy.findByPk(dto.userId);
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
        }
        user.banned = true;
        user.banReason = dto.BanReason;
        await user.save();
        return user;
    }

    





}
