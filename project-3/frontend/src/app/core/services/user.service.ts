import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://127.0.0.1:3000/user/';
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.url + 'createuseraccount', data);
  }

  signin(data: any) {
    return this.http.post(this.url + 'signin', data);
  }

  list(){
    return this.http.get(this.url + 'list');
  }

  byid(id: any){
    return this.http.get(this.url + 'byid/' + id);
  }

  delete(id: any){
    return this.http.delete(this.url + 'delete/' + id);
  }

  update(id: any, data: any){
    return this.http.put(this.url + 'update/' + id, data);
  }
  
}
