import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  post(data) {
//    return this.http.post('https://hh1.herokuapp.com/postEmail', data);
    console.log('Data: ', data);
    return this.http.post('http://localhost:8081/postEmail', data);

  }
}
