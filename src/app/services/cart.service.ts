import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Book[] = [];

  add(book: Book): void {
    this.cart.push(book);
    console.log(book);
  }

  remove(book: Book) {
    this.cart = this.cart.filter(b => b != book);
  }

  get() {
    return this.cart;
  }
}
