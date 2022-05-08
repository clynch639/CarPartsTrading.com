import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 

@Component({ 
selector: 'filters', 
templateUrl: './filters.component.html', 
styleUrls: ['./filters.component.css'] 
}) 

export class FiltersComponent { 
    
    
    constructor(private webService: WebService) {}

    async ngOnInit(){
        this.filter_list = await this.webService.getFilters(this.page);
    }

    previousPage(){
        if (this.page > 1){
            this.page = this.page -1;
            this.filter_list = this.webService.getFilters(this.page);
        }

    }
    
    nextPage(){
        this.page = this.page + 1;
        this.filter_list = this.webService.getFilters(this.page);

    }
    
    filter_list: any;

    page: number = 1
    
}