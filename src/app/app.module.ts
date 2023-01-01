import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BookListComponent } from "src/books/book-list.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
