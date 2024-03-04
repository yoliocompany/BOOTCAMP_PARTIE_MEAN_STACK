import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:3000/user/';
  constructor( private http: HttpClient ) { }

  login( data: any ){
    return this.http.post(this.url + 'signin',  data);
  }

  register( data: any ){
    return this.http.post( this.url + 'signup', data );
  }

  isLoggedIn(){

    let token = localStorage.getItem('token');
    if(token){
      return true;
    }else{
      return false;
    }

  }

  getUserDataFromToken(){

    let token = localStorage.getItem('token');
    // azklejazlejalkzejlkazej.ajelkajelkajzlkeajelkajzlkeajz.akzljeaklzjelkajze
    if(token){

      let codedData = token.split('.')[1];
    
      let decodedData = window.atob(codedData);
  
      let data = JSON.parse(decodedData);
 
      return data;

      // return JSON.parse( window.atob( token.split('.')[1] ) )
      
    }

  }

}
