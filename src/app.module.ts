import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { BookModule } from './module/book/book.module';
import { typeOrmModuleAsyncConfig } from './ormconfig/typeorm.migrations.config';

@Module({
  imports: [ConfigModule.forRoot(config),TypeOrmModule.forRootAsync(typeOrmModuleAsyncConfig) , BookModule],
})
export class AppModule {}
