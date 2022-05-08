import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
 

@Component({ 
selector: 'vintageparts', 
templateUrl: './vintageparts.component.html', 
styleUrls: ['./vintageparts.component.css'] 
}) 

export class VintagePartsComponent { 
    
    
    constructor(private webService: WebService) {}

    
    async ngOnInit(){
        this.vintage_list= this.webService.getVintages(this.page);
        
    }

    previousPage(){
        if (this.page > 1){
            this.page = this.page -1;
            this.vintage_list = this.webService.getVintages(this.page);
        }

    }
    
    nextPage(){
        this.page = this.page + 1;
        this.vintage_list = this.webService.getVintages(this.page);

    }
    
    vintage_list: any;
    
    page: number = 1
}