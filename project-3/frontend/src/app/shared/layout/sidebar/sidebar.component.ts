import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../core/auth/authentication.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  user: any;

  constructor( private _auth: AuthenticationService ){}

  ngOnInit(): void {
    this.user = this._auth.getDataFromToken();
  }


}
