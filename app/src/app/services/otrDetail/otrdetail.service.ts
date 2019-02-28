import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { mailService } from '../../services/mail/mail.service';
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
        // console.log('obj',obj)
        return this.http.post('http://10.10.0.117:24483/api/sendEmaill', obj).subscribe((response) => {
            
        });
    }
    userDetailObject(obj) {
        this.userdetailObject = obj;
        return this.userdetailObject;
    }
}
