import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Robert Martin',
        image:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 3000,
      },
      {
        name: 'Effective Java',
        author: 'Joshua Bloch',
        image:
          'https://m.media-amazon.com/images/P/0134685997.01._SCLZZZZZZZ_SX500_.jpg',
        amount: 2000,
      },
      {
        name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Richard Helm',
        image:
          'https://m.media-amazon.com/images/P/0201633612.01._SCLZZZZZZZ_SX500_.jpg',
        amount: 2200,
      },
    ];
  }
}
