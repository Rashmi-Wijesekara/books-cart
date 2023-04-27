import { CartService } from './../../services/cart.service';
import { Book } from '../../types/Book';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();

  isAdded: boolean = false;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  addToCart() {
    // this.bookEmitter.emit(this.book);
    this.cartService.add(this.book);
    this.isAdded = true;
  }

  removeFromCart() {
    this.cartService.remove(this.book);
    this.isAdded = false;
  }
}
