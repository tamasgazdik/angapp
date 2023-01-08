import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  listTitle: string = 'Book list';
  imageWidth: number = 75;
  imageMargin: number = 2;
  imagesVisible: boolean = false;
  filter: string = '';
  bookList: Book[] = [
    new Book('How to stop worrying, and start living.', '..\\assets\\images\\how_to_stop_worrying.jpg', 3500),
    new Book('How to make friends, and influence people.', '..\\assets\\images\\how_to_win_friends.jpg', 3200),
  ];

  // TODO: find out how to filter the bookList
  filteredBookList = this.bookList.filter(
    b => b.title.includes(this.filter)
  );

  toggleImageVisibility() : void
  {
    this.imagesVisible = !this.imagesVisible;
  }

  showFullImage() : void
  {
    this.imageWidth = 300 - this.imageWidth;
  }

  logFilter() : void
  {
    console.info(this.filter);
  }
}

class Book {
  private static _id: number = 0;

  title: string;
  id: number = 0;
  firstImpressions : string = '';
  started: boolean = this.firstImpressions != '';
  price: number = 0;

  constructor(title: string, readonly imageUrl: string, price: number = 0) {
        this.title = title;
        // start id's from 0
        this.id = Book._id++;
        this.price = price;
  }
}
