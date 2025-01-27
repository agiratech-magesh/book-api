import { Injectable } from '@nestjs/common';
import { Book , books} from './FakeDaabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }
  findById(bookId:number): Book| undefined{
    return books.find((book)=>book.id === bookId)
  }
}
