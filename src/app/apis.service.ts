import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  user() {
    throw new Error('Method not implemented.');
  }
  employee() {
    throw new Error('Method not implemented.');
  }
  employees() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }



  getfwtemp(){
    const httpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer 270|J97Eox47NOm6wtVlFv8j3BmtWAoxEkfzZ39M30sS99c981a3'

     });
    return this.http.get<any>("http://165.22.209.57:8500/api/dashboard/fwtemp/get/1",{headers:httpHeaders});
  }
}
