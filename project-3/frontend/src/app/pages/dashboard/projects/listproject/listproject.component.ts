import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../../../core/services/project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproject',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './listproject.component.html',
  styleUrl: './listproject.component.css'
})
export class ListprojectComponent {

  projects : any;

  constructor( private _project: ProjectService ){}

  ngOnInit(): void {
    this._project.list().subscribe({
      next: (res)=>{
        this.projects = res;
        console.log(this.projects);
      }
    })
  }

  delete(id: any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       
        this._project.delete(id).subscribe({
          next:(res)=>{
            this.ngOnInit();
          }
        })

      }
    });
  }

}
