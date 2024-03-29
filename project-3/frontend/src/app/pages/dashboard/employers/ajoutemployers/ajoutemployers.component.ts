import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajoutemployers',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './ajoutemployers.component.html',
  styleUrl: './ajoutemployers.component.css'
})
export class AjoutemployersComponent {

  userForm: FormGroup;
  image: any;
  tags : any = [];
  singleTag = '';

  constructor( private fb: FormBuilder, private _user: UserService, private _router: Router ){

    let controls = {
      fullname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      tel: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ])
    }

    this.userForm = fb.group(controls);
  }

  createTag(){
    this.tags.push(this.singleTag);
    this.singleTag = '';
  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }

  create(){

    let fd = new FormData();
    fd.append('fullname', this.userForm.value.fullname);
    fd.append('email', this.userForm.value.email);
    fd.append('tel', this.userForm.value.tel);
    fd.append('password', this.userForm.value.password);
    fd.append('tags', JSON.stringify(this.tags));
    fd.append('image', this.image);

    this._user.create(fd).subscribe({
      next: (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your user has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this._router.navigate(['/dashboard/employers/list'])
      }
    })

  }
}
