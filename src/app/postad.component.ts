import { Component } from '@angular/core'; 
import { WebService } from './web.service'; 
import { ActivatedRoute } from '@angular/router'; 
import { FormBuilder, Validators } from '@angular/forms'; 
import { AuthService } from '@auth0/auth0-angular'; 
import { Router } from '@angular/router';
 

@Component({ 
selector: 'checkout', 
templateUrl: './postad.component.html', 
styleUrls: ['./postad.component.css'] 
}) 

export class PostAdComponent { 
    
    
    constructor(private webService: WebService, 
        private route: ActivatedRoute, 
        private formBuilder: FormBuilder, 
        public authService: AuthService, 
        public router: Router) {}
    
}