import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({ 
selector: 'batteries', 
templateUrl: './battery.component.html', 
styleUrls: ['./battery.component.css'] 
}) 

export class BatteryComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute) {}

    async ngOnInit(){
        var response = await this.webService.getBattery(this.route.snapshot.params.id);
        this.battery= response;
    }
    
    battery: any;
}