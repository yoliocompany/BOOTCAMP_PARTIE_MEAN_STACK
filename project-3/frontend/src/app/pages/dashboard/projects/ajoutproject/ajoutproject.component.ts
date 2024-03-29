import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../../../core/services/client.service';
import { UserService } from '../../../../core/services/user.service';
import { ProjectService } from '../../../../core/services/project.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutproject',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajoutproject.component.html',
  styleUrl: './ajoutproject.component.css'
})
export class AjoutprojectComponent {

  projectForm: FormGroup;
  clients: any;
  users: any;

  selectedTeam: any = [];
  files: any;

  constructor( 
    private fb: FormBuilder, 
    private _client: ClientService,
    private _user: UserService,
    private _project: ProjectService,
    private _router: Router  
  ){

    let controls = {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
    }

    this.projectForm = fb.group(controls);

  }

  selectUser(e: any){
    let id = e.target.value;
    if(this.selectedTeam.indexOf(id) == -1){
      this.selectedTeam.push(id);
    }else{
      this.selectedTeam.splice( this.selectedTeam.indexOf(id), 1 );
    }

    console.log(this.selectedTeam);
    
  }

  selectImage(e: any){
    this.files = e.target.files;
  }


  ngOnInit(): void {
    
    this._client.list().subscribe({
      next: (res)=>{
        this.clients = res;
      }
    })

    this._user.list().subscribe({
      next: (res)=>{
        this.users = res;
      }
    })

  }


  send(){

    let fd = new FormData();
    fd.append('name', this.projectForm.value.name);
    fd.append('description', this.projectForm.value.description);
    fd.append('startDate', this.projectForm.value.startDate);
    fd.append('endDate', this.projectForm.value.endDate);
    fd.append('status', this.projectForm.value.status);
    fd.append('client', this.projectForm.value.client);
    fd.append('budget', this.projectForm.value.budget);
    fd.append('team', JSON.stringify(this.selectedTeam));

    for(let file of this.files){
      fd.append('files', file);
    }

    this._project.create(fd).subscribe({
      next:(res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your project has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this._router.navigate(['/dashboard/projects/list'])
      }
    })
    
  }

}
