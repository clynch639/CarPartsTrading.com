import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({ 
selector: 'vintageparts', 
templateUrl: './vintagepart.component.html', 
styleUrls: ['./vintagepart.component.css'] 
}) 

export class VintagePartComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute) {}

    async ngOnInit(){
        var response = await this.webService.getVintage(this.route.snapshot.params.id);
        this.vintagepart= response;
    }
    
    vintagepart: any;
}