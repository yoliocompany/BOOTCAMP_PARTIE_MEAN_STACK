import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ContactService } from '../../services/contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  contacts: any;

  constructor( private _user: UserService, private _contact: ContactService ){}


  ngOnInit(): void {
    
    let idUser = this._user.getUserDataFromToken()._id;

    this._contact.myContactList(idUser).subscribe({
      next:(res)=>{
        console.log(res);
        this.contacts = res;
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }

  delete(id: any){

    this._contact.delete(id).subscribe({
      next: (res)=>{
        this.ngOnInit();
      },
      error: (err)=>{
        console.log(err);
        
      }
    })

  }


}
