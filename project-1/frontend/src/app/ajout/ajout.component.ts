import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  hero = {
    name: '',
    power: 0,
    image: ''
  }

  constructor( private _data: DataService, private router: Router ){}

  ajout(){
    this._data.create(this.hero).subscribe({
      next: (res)=>{
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this.router.navigate(['/list'])

      },
      error: (err)=>{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "error in hero creation",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

}
