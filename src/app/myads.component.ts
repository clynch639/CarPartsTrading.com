import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 

@Component({ 
selector: 'myads', 
templateUrl: './myads.component.html', 
styleUrls: ['./myads.component.css'] 
}) 

export class MyAdsComponent { 
    constructor(private webService: WebService) {}

    async ngOnInit(){
        var response = await this.webService.getMyAds();
        this.myad_list= response;
    }

    
    myad_list: any;
}