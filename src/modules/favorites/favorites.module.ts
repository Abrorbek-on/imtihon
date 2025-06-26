import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Favorite } from 'src/core/models/favorite.model/favorite.model';

@Module({
  imports: [SequelizeModule.forFeature([Favorite])],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})
export class FavoritesModule {}
