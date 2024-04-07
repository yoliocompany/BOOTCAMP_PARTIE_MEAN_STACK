import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private _user: UserService, private _router: Router ){

    let controls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }

    this.loginForm = fb.group(controls);

  }

  login(){

    this._user.signin( this.loginForm.value ).subscribe({
      next: (res: any)=>{
       
        localStorage.setItem('token', res.myToken);
        
        this._router.navigate(['/dashboard']);

      },
      error: (err)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! please try again",
        });
        
      }
    })

  }

}
