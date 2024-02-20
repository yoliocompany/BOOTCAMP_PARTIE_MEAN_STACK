import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  todo = {
    text: '',
    priority: 0
  }

  constructor( private _data: DataService ){}

  ajout(){

    this._data.create( this.todo ).subscribe({

      next: (res)=>{

        this.todo = {
          text: '',
          priority: 0
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your todo has been saved",
          showConfirmButton: false,
          timer: 2000
        });
        
      },
      error: (err)=>{
        console.log(err);     
      }

    })

  }

}
