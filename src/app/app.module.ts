import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { BookListComponent } from "src/books/book-list.component";
import { StarComponent } from "src/shared/star.component";
import { TransformToSpacePipe } from "src/shared/transformtospace.pipe";
import { ZeroToEmptyPipe } from "src/shared/zerotoempty.pipe";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    StarComponent,
    TransformToSpacePipe,
    ZeroToEmptyPipe
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
