import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from 'src/core/models/movie.model/movie.model';
import { MovieDto } from './dto/movie.dto';
import { MovieFileDto } from './dto/movie.file.dto';
import { MovieFile } from 'src/core/models/movie-file.model/movie-file.model';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie) private movieModel: typeof Movie, @InjectModel(MovieFile) private movieFile: typeof MovieFile) {}

    async createMovie(id:string, payload: MovieDto, poster: string) {
        let newMovie = await this.movieModel.create({...payload,user_id:id,poster_url:poster})

        return {
            success: true,
            message: "New movie created",
            data: newMovie
        }
    }

    async create(id:string, payload: MovieFileDto, filename: string) {
        let movie = await this.movieModel.findOne({
            where: {
                movie_id: id
            }
            
        })
        if(!movie){
               throw new NotFoundException("Movie spesific id not found") 
        }
        let newMovieFile = await this.movieFile.create({...payload,movie_id: id, file_url: filename})
        return {
            success: true,
            message: "new MovieFile created",
            data: {...newMovieFile.dataValues, movie: movie.dataValues},
        }
    }
}
