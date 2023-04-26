import { Book } from './../types/Book';
import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>()

  ngOnInit(): void{}

  addToCart() {
    this.bookEmitter.emit(this.book)
  }
}
