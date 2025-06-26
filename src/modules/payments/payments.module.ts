import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from 'src/core/models/payment.model/payment.model';

@Module({
  imports: [SequelizeModule.forFeature([Payment])],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
