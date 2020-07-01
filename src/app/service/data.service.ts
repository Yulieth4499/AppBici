import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Data } from './../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private api =  'http://aulal.org:1880/';

  constructor(private http: HttpClient) { }
  getAllDatos() {
    const path ='http://aulal.org:1880/registrob' ;
    return this.http.get<Data[]>(path);
  }
  createDatos(data: Data) {
    const path ='http://aulal.org:1880/login' ;
    return this.http.post(path, data);
  }
}
