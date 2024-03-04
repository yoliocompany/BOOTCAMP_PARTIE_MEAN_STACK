import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
 
  constructor( private fb: FormBuilder, private _user: UserService, private _router: Router ){

    let controls = {
      name: new FormControl('', [ Validators.required ]),
      lastname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }

    this.registerForm = this.fb.group(controls);
  }


  send(){
    
    this._user.register( this.registerForm.value ).subscribe({
      next: (res)=>{
        this._router.navigate(['/login']);
      },
      error: (err)=>{
        console.log(err);
      }
    })

  }
}
