import { Body, Controller, Get, Put, Req, UnsupportedMediaTypeException, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { UpdateProfileDto } from './dto/profile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {v4 as uuidv4} from "uuid"
import { extname } from 'path';
import { AuthGuard } from 'src/common/guards/jwt-auth.guards.ts';
import { Request } from 'express';

@Controller('profile')
export class ProfilesController {
    constructor(private readonly profileService:  ProfilesService) {}

    @UseGuards(AuthGuard)
    @Put()
    @UseInterceptors(FileInterceptor('avatar', 
        {storage: diskStorage({destination: './uploads/avatars',
            filename: (req, file, cb) => {
                let avatarName = uuidv4() + "_" + extname(file.originalname)
                cb(null, avatarName)
    }}),
    fileFilter: (req, file, callback) => {
        let allowed = ['image/jpeg', 'image/jpg', 'image/png']
        if(!allowed.includes(file.mimetype)) {
            callback(new UnsupportedMediaTypeException('Only .jpeg | .jpg | .png types are allowed'), false)
        }
        callback(null, true)
}}))
    update(
        @Req() req: Request,
        @Body() payload: UpdateProfileDto,
        @UploadedFile() avatar: Express.Multer.File

    ){
        return this.profileService.update(req["user"].id, payload, avatar, avatar?.filename);
    }

    @UseGuards(AuthGuard)
    @Get()
    getProfile(@Req() req: Request) {
        return this.profileService.getProfile(req["user"].id)
    }
}
