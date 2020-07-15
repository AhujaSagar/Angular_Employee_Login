import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  retUrl:string="dashboard";
 
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
    this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl = params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
      const val = this.loginForm.value;
    
          if (this.authService.login(val.email, val.password))
             {
                      console.log("User is logged in");
                      this.router.navigateByUrl('/employees');
              }
              
  }

}