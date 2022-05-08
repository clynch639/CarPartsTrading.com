import { Component } from '@angular/core';
import { WebService } from './web.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'brakes',
    templateUrl: './brakes.component.html',
    styleUrls: ['./brakes.component.css']
})



export class BrakesComponent {

    constructor(private webService: WebService,
        public router : Router, private formBuilder: FormBuilder) {

            this.brakelist = this.formBuilder.group({
                searchbar:[''],
            })
        }

    async ngOnInit(){
        this.brake_list = this.webService.getBrakes(this.page);
    }

    previousPage(){
        if (this.page > 1){
            this.page = this.page -1;
            this.brake_list = this.webService.getBrakes(this.page);
        }

    }
    
    nextPage(){
        this.page = this.page + 1;
        this.brake_list = this.webService.getBrakes(this.page);

    }

    async onSubmit(){
        console.log(this.brakelist.value);
        var x = JSON.stringify(this.brakelist.value.searchbar);
        var y = x.replace('"', '');
        var z = y.replace('"', '');

          (await this.webService.SearchBrake(z)).subscribe((response: any) => {
              var val = response;
              this.router.navigate(['brakes/' + val._id])
          });
    }

    brake_list: any;
    brakelist:any;

    page: number = 1


}
    

