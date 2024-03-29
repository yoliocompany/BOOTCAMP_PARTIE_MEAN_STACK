import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemployers',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listemployers.component.html',
  styleUrl: './listemployers.component.css'
})
export class ListemployersComponent {

  employers : any ;

  constructor( private _user: UserService ){}


  ngOnInit(): void {
    
    this._user.list().subscribe({
      next: (res)=>{
        this.employers = res;
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
       
        this._user.delete(id).subscribe({
          next:(res)=>{
            this.ngOnInit();
          },
          error: (err)=>{
            console.log(err);
            
          }
        })

      }
    });
  }
}
