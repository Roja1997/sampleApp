/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class otrdetailService {
    country;
    dateArray;
    constructor(public router: Router) {
        // console.log(this.temp)
    }
    otrObject(otrObj){
        console.log('otrObj',otrObj);
        return otrObj;
        
    }


}
