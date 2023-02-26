import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input()
    rating: number = 2;
    cropWidth: number = 75;
    
    @Output()
    notify: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        // each star is 15px wide - 5 stars would take up 75px
        this.cropWidth = this.rating * 75/5;
    }

    onClick() : void {
        this.notify.emit(this.rating);
    }
}