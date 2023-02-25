import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({
    name:'books'
})
export class BooksRepository {

    @PrimaryGeneratedColumn('uuid')
    readonly id:string;

    @Column({
        name:'title',
        type:'character varying',
        length:65
    })
    readonly title:string;
}