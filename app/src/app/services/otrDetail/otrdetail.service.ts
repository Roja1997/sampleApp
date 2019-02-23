/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class otrdetailService {
    country;
    otrValue;
    showdetails;
    showOtrDetails;
    // constructor(public router: Router) {
    constructor(public router: Router,private http:HttpClient) {
        // console.log(this.temp)
    }
    //for expenselist component
    otrObject(otrObj){
        this.otrValue=otrObj;
        console.log('otrObj',this.otrValue);
        return this.otrValue;
    }

    // sendEmail(){
    //     return this.http.post('http://127.0.0.1:24483/api/sendEmail').subscribe((response)=>{
    //         console.log("response is",response);
    //     });
    // }

    sendEmail(a){
        let obj = {
            name : a
        }
        console.log('amsdmsugdysud',a);
        console.log("this.obj",obj.name);
        return this.http.post('http://127.0.0.1:24483/api/sendEmaill',obj).subscribe((response)=>{
            console.log("response is",response);
        });
    }


    //for userdetail obj
    userdetailObject;
    userDetailObject(obj){
        this.userdetailObject=obj;
        console.log('from serviece userdetail obj',this.userdetailObject);
        return this.userdetailObject;
    }




}
