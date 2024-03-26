import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientService } from '../../../../core/services/client.service';
import Swal from 'sweetalert2';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ RouterModule, BreadcrumbComponent ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  clients: any;

  constructor( private _client: ClientService ){}

  ngOnInit(): void {
    
    this._client.list().subscribe({
      next: (res)=>{
        this.clients = res;
      },
      error: (err)=>{
        console.log(err);
        
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

        this._client.delete(id).subscribe({
          next: (res)=>{
              this.ngOnInit();
          }
        })
       
      }
    });

  }

}
