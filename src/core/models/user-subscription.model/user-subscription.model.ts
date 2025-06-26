import {Table, Column, Model, DataType, Default, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { User } from '../user.model/user.model';
import { SubscriptionPlan } from '../subscription-plan.model/subscription-plan.model';
import { subscriptionStatus } from 'src/core/types/types';
import { Payment } from '../payment.model/payment.model';

@Table({ tableName: 'user_subscriptions' })
export class UserSubscription extends Model {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: DataType.UUIDV4 })
  usersubscriptions_id: string;

  @ForeignKey(() => User) @Column(DataType.UUID)
  user_id: string;

  @ForeignKey(() => SubscriptionPlan) @Column(DataType.UUID)
  plan_id: string;

  @Default(DataType.NOW) @Column(DataType.DATE)
  start_date: Date;

  @Column(DataType.DATE)
  end_date: Date;

  @Column(DataType.ENUM(...Object.values(subscriptionStatus)))
  status: subscriptionStatus;

  @Default(false) @Column(DataType.BOOLEAN)
  auto_renew: boolean;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => SubscriptionPlan)
  plan: SubscriptionPlan;

  @HasMany(() => Payment)
  payments: Payment[];
}