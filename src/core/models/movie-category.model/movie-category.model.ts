import { Table, Column, Model, DataType,ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Movie } from '../movie.model/movie.model';
import { Category } from '../category.model/category.model';

@Table({ tableName: 'movie_categories' })
export class MovieCategory extends Model {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: DataType.UUIDV4 })
  moviecategories_id: string;

  @ForeignKey(() => Movie) @Column(DataType.UUID)
  movie_id: string;

  @ForeignKey(() => Category) @Column(DataType.UUID)
  category_id: string;

  @BelongsTo(() => Movie)
  movie: Movie;

  @BelongsTo(() => Category)
  category: Category;
}
