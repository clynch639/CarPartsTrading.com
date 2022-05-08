
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({ 
selector: 'engineoil', 
templateUrl: './oil.component.html', 
styleUrls: ['./oil.component.css'] 
}) 

export class OilComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute) {}

    ngOnInit(){
        this.oil = this.webService.getOil(this.route.snapshot.params.id);
        this.reviews= this.webService.getOilReviews(this.route.snapshot.params.id);
    }

    oil: any = [];
    reviews: any = [];
}