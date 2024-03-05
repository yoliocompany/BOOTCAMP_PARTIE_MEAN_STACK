import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  contactForm: FormGroup;
  image: any;
  id: any;

  constructor(
    private fb: FormBuilder,
    private _user: UserService,
    private _contact: ContactService,
    private _router: Router,
    private _act: ActivatedRoute
  ) {
    let controls = {
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    };

    this.contactForm = this.fb.group(controls);
  }

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');

    this._contact.byId(this.id).subscribe({
      next: (res) => {
        this.contactForm.reset( res );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectImage(e: any) {
    this.image = e.target.files[0];
  }

  send() {
    let idUser = this._user.getUserDataFromToken()._id;

    let fd = new FormData();
    fd.append('name', this.contactForm.value.name);
    fd.append('lastname', this.contactForm.value.lastname);
    fd.append('email', this.contactForm.value.email);
    fd.append('address', this.contactForm.value.address);
    fd.append('tel', this.contactForm.value.tel);
    fd.append('idUser', idUser);
    if(this.image){
      fd.append('image', this.image);
    }

    this._contact.update( this.id, fd).subscribe({
      next: (res) => {
        this._router.navigate(['/home/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
