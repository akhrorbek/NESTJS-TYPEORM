import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './module/config';

@Module({
  imports: [ConfigModule.forRoot(config)],
})
export class AppModule {}
