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
        // return this.http.put('http://127.0.0.1:24483/api/Email', headers).subscribe(result => {
        //     console.log(result);
        // });

        let expenseArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));
        let country = 'Singapore';//this.otrInfo.country
        console.log("countryName", country);
        let user = JSON.parse(localStorage.getItem("profile"));
        let keys = Object.keys(user);
        let values = Object.keys(user).map(key => user[key]);
        let expkey = Object.keys(expenseArray);
        let expValue = Object.keys(expenseArray).map(key => expenseArray[key]);
        //let keys = Object.keys(user).map(key => user[key]);
        //let values =Object.values(user);
        let arr = [];
        let expobj = expenseArray[expenseArray.length - 1];
        console.log("expense arrsay", expobj)


        for (let exp of expobj) {
            if (Array.isArray(exp)) {
                arr.push(exp);
                console.log("this.arrr", arr);
            }
            else {
                arr.push(exp);
                console.log("this.arrr", arr);
            }

        }

        //console.log("this.arrr",arr);

        let obj = keys.toString() + "\t";
        obj += "country" + "\t";
        obj += expkey.toString() +
            "\n" + values.toString() + "\t" + country + "\t" + expValue.toString();

        return this.http.put('http://127.0.0.1:24483/api/convertToCSV', { userInfo: obj }, headers).subscribe(result => {
            console.log(result);
        });

    }


}
