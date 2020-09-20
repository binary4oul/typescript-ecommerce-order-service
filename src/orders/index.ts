import { Module } from '@nestjs/common';
import { OrderDBModule } from '@/orders/db';
import { OrderRepository } from '@/orders/db/order.repository';

@Module({
  imports: [OrderDBModule],
  providers: [OrderRepository],
})
export class OrderModule {}
