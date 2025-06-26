import { Body, Controller, Param, Post, Req, UnsupportedMediaTypeException, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieDto } from './dto/movie.dto';
import { Express, Request } from "express"
import { FileInterceptor } from '@nestjs/platform-express';
import {v4 as uuidv4} from "uuid"
import { extname } from 'path';
import { diskStorage } from 'multer';
import { MovieFileDto } from './dto/movie.file.dto';
import { Roles } from 'src/core/decarator/roles.decarator';
import { UserRole } from 'src/core/types/types';
import { AuthGuard } from 'src/common/guards/jwt-auth.guards.ts';

@Roles(UserRole.USER)
@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

@UseGuards(AuthGuard)
@Roles(UserRole.USER)
@Post()
    @UseInterceptors(FileInterceptor('poster', 
        {storage: diskStorage({destination: './uploads/posters',
            filename: (req, file, cb) => {
                let posterName = uuidv4() + "_" + extname(file.originalname)
                cb(null, posterName)
    }}),
    fileFilter: (req, file, callback) => {
        let allowed = ['image/jpeg', 'image/jpg', 'image/png']
        if(!allowed.includes(file.mimetype)) {
            callback(new UnsupportedMediaTypeException('Type must be .jpg, .jpeg, .png '), false)
        }
        callback(null, true)
}}))
    createMovie(
        @Req() req : Request,
        @UploadedFile() poster: Express.Multer.File,
        @Body() payload : MovieDto
        ) {
        return this.movieService.createMovie(req["user"].id, payload, poster.filename)
    }


    
    @UseGuards(AuthGuard)
    @Roles(UserRole.USER)
    @Post(":id/files")
    @UseInterceptors(FileInterceptor('video', 
        {storage: diskStorage({destination: './uploads/videos',
            filename: (req, file, cb) => {
                let videoName = uuidv4() + "_" + extname(file.originalname)
                cb(null, videoName)
    }}),
    fileFilter: (req, file, callback) => {
        let allowed = ['video/mp4', 'video/webm']
        if(!allowed.includes(file.mimetype)) {
            callback(new UnsupportedMediaTypeException('Only  .mp4 | webm types are allowed'), false)
        }
        callback(null, true)
}}))
    create(
        @Param("id") id: string,
        @UploadedFile() video: Express.Multer.File,
        @Body() payload : MovieFileDto
    ) {
        return this.movieService.create(id, payload, video.filename)
    }
}

