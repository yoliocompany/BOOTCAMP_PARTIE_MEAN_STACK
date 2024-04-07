import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/auth/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user: any;

  constructor( private _auth: AuthenticationService ){}

  ngOnInit(): void {
    this.user = this._auth.getDataFromToken();
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

}
