import * as config from 'config';

export class AppConfigService {
  getMongoOption() {
    return config.get('mongodb');
  }
}
