import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BooksRepository } from 'src/entities/books.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports:[TypeOrmModule.forFeature([BooksRepository])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
