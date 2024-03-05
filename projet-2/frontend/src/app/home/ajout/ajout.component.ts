import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ContactService } from '../../services/contact.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  contactForm: FormGroup;
  image: any;

  constructor( 
    private fb: FormBuilder, 
    private _user: UserService, 
    private _contact: ContactService,
    private _router: Router  
  ){

    let controls = {
      name: new FormControl('', [ Validators.required ]),
      lastname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    }

    this.contactForm = this.fb.group(controls);

  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }

  send(){
    let idUser = this._user.getUserDataFromToken()._id;

    let fd = new FormData();
    fd.append( 'name', this.contactForm.value.name );
    fd.append( 'lastname', this.contactForm.value.lastname );
    fd.append( 'email', this.contactForm.value.email );
    fd.append( 'address', this.contactForm.value.address );
    fd.append( 'tel', this.contactForm.value.tel );
    fd.append( 'image',  this.image );
    fd.append( 'idUser', idUser );
    
    this._contact.create( fd ).subscribe({
      next:(res)=>{
        this._router.navigate(['/home/list']); 
      },  
      error: (err)=>{
        console.log(err);
        
      }
    })

    
  }

}
