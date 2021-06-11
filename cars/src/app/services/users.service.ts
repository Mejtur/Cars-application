import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from '../models/users';

const baseUrl='http://localhost:54626/api/Users';
@Injectable({
  providedIn: 'root'
})


export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(user: Users){
    return this.http.post(baseUrl, user);
  }
  update(id: number, user: Users){
    return this.http.put(`${baseUrl}/${id}`, user);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
