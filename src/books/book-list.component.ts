import { Component, OnInit } from '@angular/core';
import { IBook } from './ibook';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.css' ]
})
export class BookListComponent implements OnInit {
  listTitle: string = 'Book list';
  imageWidth: number = 75;
  imageMargin: number = 2;
  imagesVisible: boolean = false;

  private _filter: string = '';
  private bookList: Book[] = [
    new Book('How to stop worrying, and start living.', '..\\assets\\images\\how_to_stop_worrying.jpg', 3500),
    new Book('How to make friends, and influence people.', '..\\assets\\images\\how_to_win_friends.jpg', 3200),
  ];
  private _filteredBookList: Book[];

  ngOnInit(): void {
    this.filter = 'Anyád';
  }

  constructor(){
    this._filteredBookList = [];
  }

  get filter() : string {
    return this._filter;
  }

  set filter(value)
  {
    this._filter = value;
    this.filterBookList(value);
  }

  get filteredBookList() : Book[]
  {
    return this.bookList.filter(book => book.title.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase()) || book.title.toLocaleLowerCase().startsWith(this.filter.toLocaleLowerCase()));
  }

  set filteredBookList(value: Book[]) {
    this._filteredBookList = value;
  }
  toggleImageVisibility() : void
  {
    this.imagesVisible = !this.imagesVisible;
  }

  showFullImage() : void
  {
    this.imageWidth = 300 - this.imageWidth;
  }

  filterBookList(filter: string)
  {
      this.filteredBookList = this.bookList.filter((book: Book) => {
      book.title.includes(filter);
    })
  }
}

class Book implements IBook {
  private static _id: number = 0;

  title: string;
  id: number;
  firstImpressions : string = '';
  started: boolean = this.firstImpressions != '';
  price: number;

  constructor(title: string, readonly imageUrl: string, price: number = 0) {
        this.title = title;
        // start id's from 0
        this.id = Book._id++;
        this.price = price;
  }
}
