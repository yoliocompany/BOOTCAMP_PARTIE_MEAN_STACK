import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user: any;
  constructor(private _user: UserService){}

  ngOnInit(): void {
    
     this.user = this._user.getUserDataFromToken();

  }


  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

}
