import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({ 
selector: 'filters', 
templateUrl: './filter.component.html', 
styleUrls: ['./filter.component.css'] 
}) 

export class FilterComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute) {}

    async ngOnInit(){
        var response = await this.webService.getFilter(this.route.snapshot.params.id);
        this.filter= response;
    }
    
    filter: any;
}