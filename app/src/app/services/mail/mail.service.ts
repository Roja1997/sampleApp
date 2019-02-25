/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
@Injectable()


export class mailService {

    constructor(private http: HttpClient, private otrInfo: otrdetailService) { }
    sendingMail() {



        let headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        let expenseArray = JSON.parse(localStorage.getItem(this.otrInfo.country));
        let expobj = expenseArray[expenseArray.length - 1];
        return this.http.post('http://10.10.0.125:5000/generate/csv', { userInfo: expobj }, headers).subscribe(result => {
            console.log('hello',result);
        });

    }
}
       