import { Component } from '@angular/core'; 
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WebService } from './web.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public authService: AuthService, public webService: WebService,
    private formBuilder: FormBuilder, public router: Router) {

       
      this.tyrelist = this.formBuilder.group({
        search:[''],
    })
    
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




  tyrelist: any;
}
