import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/role-auth.decorator';


@Controller('profile')
export class ProfileController {
    
    constructor(private profileService: ProfileService) {}

    @Post()
    create(@Body() dto: CreateProfileDto) {
        return this.profileService.createProfile(dto); 
    }

}   
