import { Component } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from './web.service'; 


@Component({ 
selector: 'tyres', 
templateUrl: './tyres.component.html', 
styleUrls: ['./tyres.component.css'] 
}) 

export class TyresComponent { 
    constructor(public webService: WebService,
        private formBuilder: FormBuilder, public router: Router) {
            
            this.tyrelist = this.formBuilder.group({
                search:[''],
            })




        }

    ngOnInit(){
        this.tyre_list = this.webService.getTyres(this.page);
    }

    previousPage(){
        if (this.page > 1){
            this.page = this.page -1;
            this.tyre_list = this.webService.getTyres(this.page);
        }

    }
    
    nextPage(){
        this.page = this.page + 1;
        this.tyre_list = this.webService.getTyres(this.page);

    }

    async onSubmit(){
        console.log(this.tyrelist.value);
        var x = JSON.stringify(this.tyrelist.value.search);
        var y = x.replace('"', '');
        var z = y.replace('"', '');

          (await this.webService.SearchTyre(z)).subscribe((response: any) => {
              var val = response;
              this.router.navigate(['tyres/' + val._id])
          });
    }

    tyre_list: any = [];
    tyrelist: any;
    page: number = 1;
}