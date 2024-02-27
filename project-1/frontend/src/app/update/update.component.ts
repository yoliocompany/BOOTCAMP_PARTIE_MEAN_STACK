import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  id: any;
  hero: any;

  constructor(
    private _act: ActivatedRoute, 
    private _data: DataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // na9ra l id m lien
    this.id = this._act.snapshot.paramMap.get('id');

    this._data.byId(this.id).subscribe({
      next: (res) => {
        this.hero = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  save(){

    this._data.update(this.id, this.hero).subscribe({
      next: (res)=>{

        this._router.navigate(['/list'])
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }
}
