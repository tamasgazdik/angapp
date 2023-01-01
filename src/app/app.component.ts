import { Component } from "@angular/core";
import { Calculator } from "src/calculator/calculator";

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})
export class AppComponent
{
  pageTitle: string = 'angapp2';

  numbers(db:number) {
    return new Array(Calculator.add(db, db));
  }
}
