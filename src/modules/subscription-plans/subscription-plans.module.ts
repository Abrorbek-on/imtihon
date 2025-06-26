import { Module } from '@nestjs/common';
import { SubscriptionPlansController } from './subscription-plans.controller';
import { SubscriptionPlansService } from './subscription-plans.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubscriptionPlan } from 'src/core/models/subscription-plan.model/subscription-plan.model';

@Module({
  imports: [SequelizeModule.forFeature([SubscriptionPlan])],
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService]
})
export class SubscriptionPlansModule {}
