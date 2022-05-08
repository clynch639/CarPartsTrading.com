import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';

@Component({ 
selector: 'brakes', 
templateUrl: './brake.component.html', 
styleUrls: ['./brake.component.css'] 
}) 

export class BrakeComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute) {}

    async ngOnInit(){
        var response = await this.webService.getBrake(this.route.snapshot.params.id);
        this.brake= response;
    }
    
    brake: any;
}