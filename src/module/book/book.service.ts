import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm'
import { BooksRepository } from 'src/entities/books.entity';
import { Repository} from 'typeorm'

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BooksRepository)
        private readonly typeorm: Repository<BooksRepository>
    )
    {}

    async createBooks (body:any):Promise<void> {
        await this.typeorm.createQueryBuilder()
        .insert()
        .into(BooksRepository)
        .values({
            title:body.title
        })
        .execute()
    }

}
