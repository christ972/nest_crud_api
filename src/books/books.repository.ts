import { EntityRepository, Repository } from 'typeorm';
import { Book } from './entities/book.entity';

export class BooksRepository extends Repository<Book> {}
