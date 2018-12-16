import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  clicked () {
    console.log('im a clicked function in data');
  }

  getUsers () {
    return this.http.get('https://reqres.in/api/users');
  }
}
