import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector : 'app-star-rating',
    templateUrl : './star-rating.component.html',
    styleUrls : ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
    
    public starWidth: number | undefined;
    public rating : number = 0 ;

    ngOnChanges(){
        this.starWidth = this.rating * 0 / 5;
    }
    
}