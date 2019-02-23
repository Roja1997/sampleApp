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
        console.log("in service........");
        let expenseArray = JSON.parse(localStorage.getItem(this.otrInfo.country));
        console.log('expense', expenseArray);
        let expobj = expenseArray[expenseArray.length - 1];
        console.log('EXpense object:', expobj);
        return this.http.post('http://localhost:5000/generate/csv', { userInfo: expobj }, headers).subscribe(result => {
            console.log('hello',result);
        });

    }
}
       