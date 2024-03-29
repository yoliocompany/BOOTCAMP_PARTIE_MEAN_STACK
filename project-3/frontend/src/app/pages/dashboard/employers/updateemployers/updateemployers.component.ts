import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateemployers',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './updateemployers.component.html',
  styleUrl: './updateemployers.component.css'
})
export class UpdateemployersComponent {
  userForm: FormGroup;
  image: any;
  tags : any = [];
  singleTag = '';

  id: any;

  constructor( 
    private fb: FormBuilder, 
    private _act: ActivatedRoute,
    private _user: UserService,
    private _router: Router
  ){

    let controls = {
      fullname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      tel: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [])
    }

    this.userForm = fb.group(controls);
  }

  ngOnInit(): void {

    this.id = this._act.snapshot.paramMap.get('id');

    this._user.byid(this.id).subscribe({
     next: (res: any)=>{
      this.userForm.reset(res);
      this.tags = res.tags;
     } 
    })
  }

  createTag(){
    this.tags.push(this.singleTag);
    this.singleTag = '';
  }

  deleteTag(index: number){
    this.tags.splice(index, 1)
  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }

  save(){

    let fd = new FormData();
    fd.append('fullname', this.userForm.value.fullname);
    fd.append('email', this.userForm.value.email);
    fd.append('tel', this.userForm.value.tel);
    fd.append('tags', JSON.stringify(this.tags));
    if(this.image){
      fd.append('image', this.image);
    }
    if(this.userForm.value.password.length > 0){
      fd.append('password', this.userForm.value.password);
    }

    this._user.update(this.id, fd).subscribe({
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
