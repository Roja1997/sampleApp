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
        console.log('calling',otrObj);
        this.viewOtr = true;
        this.otrValue = otrObj;
        return this.otrValue;
    }
    sendEmail(a) {
        let obj = {
            name: a
        }
        return this.http.post('http://127.0.0.1:24483/api/sendEmail', obj).subscribe((response) => {
            
        });
    }
    userDetailObject(obj) {
        this.userdetailObject = obj;
        return this.userdetailObject;
    }
}
