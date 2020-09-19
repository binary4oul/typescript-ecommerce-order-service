import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = config.get('port') as number;
  await app.listen(port);

  launchHotReload(app);
}

bootstrap();

declare const module: any;
function launchHotReload(app: INestApplication) {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
