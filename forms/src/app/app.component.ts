import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  contactForm: FormGroup;

  constructor( private fb: FormBuilder ){

    let controls = {
      name: new FormControl( '' , [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ] ),
      email: new FormControl( '', [
        Validators.required,
        Validators.email
      ] ),
      subject: new FormControl( '', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[a-zA-Z]+$')
      ] ),
      message: new FormControl( '', [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(200)
      ] )
    }

    this.contactForm = this.fb.group( controls );

  }

  send(){
    console.log( this.contactForm.value );


      


  }

}
