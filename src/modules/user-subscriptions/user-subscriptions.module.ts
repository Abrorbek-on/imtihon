import { Module } from '@nestjs/common';
import { UserSubscriptionsController } from './user-subscriptions.controller';
import { UserSubscriptionsService } from './user-subscriptions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserSubscription } from 'src/core/models/user-subscription.model/user-subscription.model';

@Module({
  imports: [SequelizeModule.forFeature([UserSubscription])],
  controllers: [UserSubscriptionsController],
  providers: [UserSubscriptionsService]
})
export class UserSubscriptionsModule {}
