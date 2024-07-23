import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookName: string;

  @Column()
  author: string;

  @Column()
  publisher: string;

  @Column()
  pages: string;
}
