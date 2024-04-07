import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }
  }

  getDataFromToken(){
    let token = localStorage.getItem('token');
    if(token){
      return JSON.parse( window.atob( token.split('.')[1] ) )
    }
  }

}
