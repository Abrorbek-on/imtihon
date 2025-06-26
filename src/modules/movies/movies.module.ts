import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from 'src/core/models/movie.model/movie.model';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { RedisModule } from 'src/common/redis/redis.module';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieFile } from 'src/core/models/movie-file.model/movie-file.model';

@Module({
    imports: [
      SequelizeModule.forFeature([Movie, MovieFile]),
      UsersModule,
      JwtModule,
      MailerModule,
      RedisModule,
    ],
    controllers: [MoviesController],
    providers: [MoviesService, AuthService],
})
export class MoviesModule {}
