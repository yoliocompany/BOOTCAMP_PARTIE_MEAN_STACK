import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../../core/services/client.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  clientForm : FormGroup;
  image: any;
  constructor(private fb: FormBuilder, private _client: ClientService, private _router: Router){
    let controls = {
      fullname : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required ]),
      tel : new FormControl('', [ Validators.required ]),
      address : new FormControl('', [ Validators.required ]),
    }

    this.clientForm = this.fb.group(controls);
  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }


  send(){

    let fd = new FormData();
    fd.append('fullname', this.clientForm.value.fullname);
    fd.append('email', this.clientForm.value.email);
    fd.append('tel', this.clientForm.value.tel);
    fd.append('address', this.clientForm.value.address);
    fd.append('image', this.image);

    this._client.create(fd).subscribe({
      next: (res)=>{

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your client has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this._router.navigate(['/dashboard/clients/list'])

      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }

}
