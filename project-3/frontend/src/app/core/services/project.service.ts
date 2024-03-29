import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = 'http://127.0.0.1:3000/project/';
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.url + 'create', data);
  }

  update(id: any, data: any) {
    return this.http.put(this.url + 'update/' + id, data);
  }

  list() {
    return this.http.get(this.url + 'list');
  }

  byid(id: any) {
    return this.http.get(this.url + 'byid/' + id);
  }

  delete(id: any) {
    return this.http.delete(this.url + 'delete/' + id);
  }

  preview(id: any) {
    return this.http.get(this.url + 'preview/' + id);
  }
}
