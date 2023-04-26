import { Book } from './../types/Book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [
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

  // isDisabled: boolean = false;

  isShowing: boolean = true;

  // handleClick() {
  //   console.log("click")

  //   if(this.isDisabled) this.isDisabled = false;
  //   else this.isDisabled = false;

  //   console.log(this.isDisabled)
  // }

  // inputName: string = ''
  ngOnInit(): void{}

  addToCart(book: any) {
    console.log(book)
  }
}
