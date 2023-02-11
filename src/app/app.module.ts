import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BookListComponent } from "src/books/book-list.component";
import { TransformToSpacePipe } from "src/books/transformtospace.pipe";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    TransformToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
