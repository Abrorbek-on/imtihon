import {Table,Column,Model,DataType, ForeignKey,BelongsTo} from 'sequelize-typescript';
import { User } from '../user.model/user.model';

@Table({ tableName: 'movies' })
export class Movie extends Model {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: DataType.UUIDV4 })
  movie_id: string;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING, unique: true })
  slug: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.INTEGER)
  release_year: number;

  @Column(DataType.INTEGER)
  duration_minutes: number;

  @Column({ type: DataType.STRING })
  poster_url: string;

  @Column(DataType.DECIMAL(3, 1))
  rating: number;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  created_by: string;

  @BelongsTo(() => User)
  creator: User;
}
