import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms'
import { AuthService } from '@auth0/auth0-angular';

@Component({ 
selector: 'tyres', 
templateUrl: './tyre.component.html', 
styleUrls: ['./tyre.component.css'] 
}) 

export class TyreComponent { 

    tyreReviewForm: any;

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public authService: AuthService,
        public router: Router) {}

    ngOnInit(){

        this.tyreReviewForm = this.formBuilder.group({
            username: ['', Validators.required],
            comment: ['', Validators.required],
            stars: 5
        });

        this.tyre_list= this.webService.getTyre(this.route.snapshot.params.id);
        this.reviews= this.webService.getTyreReviews(this.route.snapshot.params.id);
    }

    onSubmit(){
        this.webService.postTyreReview(this.tyreReviewForm.value)
          .subscribe( ( response: any) =>{
              this.tyreReviewForm.reset();
              this.reviews = this.webService.getTyreReviews(this.route.snapshot.params.id);
          })
    }

    DeleteReview(review_id : any){
        this.webService.deleteTyreReview(this.route.snapshot.params['id'], review_id)
        .subscribe((response: any) => {
            this.router.navigate(['/tyres'])
        })
    }

    tyre_list: any = [];
    reviews: any = [];
}