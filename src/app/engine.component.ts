import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 


@Component({ 
selector: 'engineoil', 
templateUrl: './engine.component.html', 
styleUrls: ['./engine.component.css'] 
}) 

export class EngineOilComponent { 
    
    
    constructor(public webService: WebService) {}

    ngOnInit(){
        this.oil_list = this.webService.getOils(this.page);
    }

    previousPage(){
        if (this.page > 1){
            this.page = this.page -1;
            this.oil_list = this.webService.getOils(this.page);
        }

    }
    
    nextPage(){
        this.page = this.page + 1;
        this.oil_list = this.webService.getOils(this.page);

    }
    
    oil_list: any = [];   
    page : number = 1
    
}