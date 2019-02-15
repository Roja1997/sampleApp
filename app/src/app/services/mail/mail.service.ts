/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class mailService {

    constructor(private http: HttpClient) { }
    sendingMail() {
      
         let headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };
  console.log("in service........");
        return this.http.put('http://127.0.0.1:24483/api/Email', headers).subscribe(result => {
            console.log(result);
        });
        

    }


}
