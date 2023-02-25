import { Param } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger/dist';
import { BookService } from './book.service';

@ApiTags('Book')
@Controller('book')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ){}

    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    @ApiCreatedResponse()
    @ApiNotFoundResponse()
    @ApiUnprocessableEntityResponse()
    @ApiForbiddenResponse()

    async createBook (@Body() body: any): Promise<void> {
        this.bookService.createBooks(body)
    }

    @Patch('/update/:id')
    async updateBooks(@Param('id', new ParseUUIDPipe()) id:string, @Body() body:any):Promise<void> {
        this.bookService.updateBooks(id, body)
    }

    @Delete('/delete/:id')
    async deleteBooks(@Param('id', new ParseUUIDPipe()) id:string):Promise<void> {
        this.bookService.deleteBook(id)
    }
}
