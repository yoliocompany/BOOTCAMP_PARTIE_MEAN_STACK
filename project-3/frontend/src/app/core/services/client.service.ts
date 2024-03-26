import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  url = 'http://127.0.0.1:3000/client/';
  constructor(private http: HttpClient) {}

  create(client: any) {
    return this.http.post(this.url + 'create', client);
  }

  list() {
    return this.http.get(this.url + 'list');
  }

  byId(id: any) {
    return this.http.get(this.url + 'byid/' + id);
  }

  delete(id: any) {
    return this.http.delete(this.url + 'delete/' + id);
  }

  update(id: any, data: any) {
    return this.http.put(this.url + 'update/' + id, data);
  }
  
}
