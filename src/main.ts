import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function main() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  const host = config.getOrThrow<string>('app.host')
  const port = config.getOrThrow<number>('app.port')

  await app.listen(port, host);
}
main();
