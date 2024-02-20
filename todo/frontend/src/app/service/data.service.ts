import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // 1
  url = 'http://127.0.0.1:3000/todo/';

  // 2
  constructor( private http: HttpClient ) { }


  create( todo: any ){
      return  this.http.post( this.url + 'ajout' , todo );
  }

  list(){
    return this.http.get( this.url + 'list' );
  }


}
