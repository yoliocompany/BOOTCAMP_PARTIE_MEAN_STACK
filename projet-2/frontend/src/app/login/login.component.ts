import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private _user: UserService, private _router: Router ){

    let controls = {
      email : new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ])
    }

    this.loginForm = this.fb.group(controls);

  }

  send(){
   
    this._user.login( this.loginForm.value ).subscribe({
      next: (res: any)=>{
        
        // tsajel token f browser
        localStorage.setItem( 'token', res.myToken )
        // redirect 
        this._router.navigate(['/home']);

      },
      error: (err)=>{
        console.log(err);      
      }
    })
    
  }
  

}
