import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class otrdetailService {
    country;
    otrValue;
    viewOtr = false;
    userdetailObject;
    constructor(public router: Router, private http: HttpClient) {
    }
    otrObject(otrObj) {
        this.viewOtr = true;
        this.otrValue = otrObj;
        console.log('otrObj', this.otrValue);
        console.log('View otr:',this.viewOtr);
        return this.otrValue;
    }
    sendEmail(a) {
        let obj = {
            name: a
        }
        return this.http.post('http://127.0.0.1:24483/api/sendEmaill', obj).subscribe((response) => {
            console.log("response is", response);
        });
    }
    userDetailObject(obj) {
        this.userdetailObject = obj;
        console.log('from serviece userdetail obj', this.userdetailObject);
        return this.userdetailObject;
    }
}
