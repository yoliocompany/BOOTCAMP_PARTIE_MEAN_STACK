import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://127.0.0.1:3000/hero/';

  constructor(private http: HttpClient) {}

  create(hero: any){
    return this.http.post( this.url + 'ajout' , hero );
  }

  all(){
    return this.http.get(this.url + 'list');
  }

  byId(id: any){
    return this.http.get(this.url + 'byid/' + id );
  }

  delete(id: any){
    return this.http.delete(this.url + 'delete/' + id);
  }

  update(id: any, data: any){
    return this.http.put(  this.url + 'update/' + id  , data  )
  }


}
