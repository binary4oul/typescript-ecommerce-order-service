import { OnApplicationBootstrap, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository, MongoConstant } from '@/common';
import { IOrder } from '@/orders/types/order.interface';

@Injectable()
export class OrderRepository extends BaseRepository<IOrder>
  implements OnApplicationBootstrap {
  constructor(
    @InjectModel(MongoConstant.ORDER_MODEL)
    private readonly orderModel: Model<IOrder>,
  ) {
    super(orderModel);
  }
  onApplicationBootstrap() {
    this.createCollection();
  }
}
