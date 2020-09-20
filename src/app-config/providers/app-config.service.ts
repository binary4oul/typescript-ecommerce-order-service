import { Injectable } from '@nestjs/common';
import * as config from 'config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

@Injectable()
export class AppConfigService {
  getMongoOption(): MongooseModuleOptions {
    return config.get('mongodb');
  }
}
