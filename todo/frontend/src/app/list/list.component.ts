import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  todos : any = [];

  constructor( private _data: DataService ){}

  ngOnInit(): void {
 
    this._data.list().subscribe({
      next: (res)=>{
        this.todos = res;
        console.log(this.todos);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  
  }

}
