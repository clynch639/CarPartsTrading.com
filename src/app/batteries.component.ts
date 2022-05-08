import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 


@Component({ 
selector: 'batteries', 
templateUrl: './batteries.component.html', 
styleUrls: ['./batteries.component.css'] 
}) 

export class BatteriesComponent { 
    
    
    constructor(private webService: WebService) {}


        async ngOnInit(){
            this.battery_list = this.webService.getBatteries(this.page);
        }

        previousPage(){
            if (this.page > 1){
                this.page = this.page -1;
                this.battery_list = this.webService.getBatteries(this.page);
            }
    
        }
        
        nextPage(){
            this.page = this.page + 1;
            this.battery_list = this.webService.getBatteries(this.page);
    
        }
        
        battery_list: any;

        page:number = 1
    
}