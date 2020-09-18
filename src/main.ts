import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  launchHotReload(app);
}

bootstrap();

declare const module: any;
function launchHotReload(app: INestApplication){
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}


