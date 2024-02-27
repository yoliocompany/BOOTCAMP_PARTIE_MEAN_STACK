import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  heros : any = [];

  constructor( private _data: DataService ){}

  ngOnInit(): void {
    
    this._data.all().subscribe({
      next: (res)=>{
        this.heros = res;      
      },
      error: (err)=>{
        console.log(err);
      }
    })

  }

  deleteHero(id: any){

    this._data.delete(id).subscribe({
      next: (res)=>{
        this.ngOnInit();
      },
      error: (err)=>{
        console.log(err);
      }
    })

  }

}
