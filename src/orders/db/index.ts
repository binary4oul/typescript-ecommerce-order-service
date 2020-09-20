import { MongooseModule } from '@nestjs/mongoose';
import { MongoConstant } from '@/common';
import { OrderSchema } from '@/orders/db/order.schema';

export const OrderDBModule = MongooseModule.forFeature([
  {
    name: MongoConstant.ORDER_MODEL,
    schema: OrderSchema,
  },
]);
