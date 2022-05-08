import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({ 
selector: 'myads', 
templateUrl: './myad.component.html', 
styleUrls: ['./myad.component.css'] 
}) 

export class MyAdComponent { 
    constructor(private webService: WebService,
        private route: ActivatedRoute,
        public router: Router) {}

    async ngOnInit(){
        var response = await this.webService.getMyAd(this.route.snapshot.params.id);
        this.myad= response;
    }

    DeleteAd(){
        this.webService.DeleteMyAd(this.route.snapshot.params.id)
          .subscribe( (response: any) => {
              this.router.navigate(['/myads'])
          })
    }
    
    myad: any;
}