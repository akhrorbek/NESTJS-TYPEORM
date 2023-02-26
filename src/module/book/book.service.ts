import { NotFoundException } from '@nestjs/common';
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

    async updateBooks (id:string,body:any):Promise<void> {
        const books = await this.typeorm.find()
        const foundBook = books.find(e => e.id == id)
        if(!foundBook) {
            throw new NotFoundException()
        }
        await this.typeorm.createQueryBuilder()
        .update(BooksRepository)
        .set({
            title: body.title
        })
        .where({
            id:id
        })
        .execute()
    }

    async deleteBook (id:string):Promise<void> {

        const books = await this.typeorm.find()
        const foundBook = books.find(e => e.id == id)
        if(!foundBook) {
            throw new NotFoundException()
        }
        await this.typeorm.createQueryBuilder()
        .delete()
        .from(BooksRepository)
        .where({
            id:id
        })
        .execute()
    }

}
