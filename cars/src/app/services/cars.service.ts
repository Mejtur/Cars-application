import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Cars } from '../models/cars';
const baseUrl='http://localhost:54626/api/Cars';
@Injectable({
  providedIn: 'root'
})


export class CarsService  {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }
  getById(id:number){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(car: Cars){
    return this.http.post(baseUrl, car);
  }
  update(id: number, car: Cars){
    return this.http.put(`${baseUrl}/${id}`, car);
  }
  deleteById(id:number){
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByTitle(carbrand: string){
    return this.http.get(`${baseUrl}?carbrand=${carbrand}`);
  }


}
