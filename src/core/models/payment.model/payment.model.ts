import {Table, Column, Model, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { UserSubscription } from '../user-subscription.model/user-subscription.model';
import { PaymentMethod, PaymentStatus } from 'src/core/types/types';

@Table({ tableName: 'payments' })
export class Payment extends Model {
  @Column({ type: DataType.UUID, primaryKey: true, defaultValue: DataType.UUIDV4 })
  payment_id: string;

  @ForeignKey(() => UserSubscription) @Column(DataType.UUID)
  user_subscription_id: string;

  @Column({ type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column(DataType.ENUM(...Object.values(PaymentMethod)))
  payment_method: PaymentMethod;

  @Column(DataType.JSON)
  payment_details: object;

  @Column(DataType.ENUM(...Object.values(PaymentStatus)))
  status: PaymentStatus;

  @Column({ type: DataType.STRING })
  external_transaction_id: string;

  @BelongsTo(() => UserSubscription)
  user_subscription: UserSubscription;
}