import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { MovieCategory } from '../movie-category.model/movie-category.model';
import { DataTypes } from 'sequelize';

@Table({ tableName: 'categories' })
export class Category extends Model {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: DataType.UUIDV4 })
  category_id: string;

  @Column(DataType.STRING)
  name: string;

  @Column({
    type: DataTypes.STRING,
    unique: true
  })
  slug: string; 

  @Column(DataType.TEXT)
  description: string;

  @HasMany(() => MovieCategory)
  movieCategories: MovieCategory[];
}