import { Component } from "@angular/core";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  listTitle: string = 'Book list';
  filter: string = '';
  bookList: Book[] = [
    new Book('How to stop worrying, and start living.', 3500),
    new Book('How to make friends, and influence people.', 3200),
  ];
}

class Book {
  private static _id: number = 0;

  title: string;
  id: number = 0;
  firstImpressions : string = '';
  started: boolean = this.firstImpressions != '';
  price: number = 0;

  constructor(title: string, price: number = 0) {
        this.title = title;
        // start id's from 0
        this.id = Book._id++;
        this.price = price;
  }
}
