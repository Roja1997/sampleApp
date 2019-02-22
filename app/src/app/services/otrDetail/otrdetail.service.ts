/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class otrdetailService {
    country;
    otrObject;
    constructor(public router: Router) {
        // console.log(this.temp)
    }

    otrObject(otrObj){
        this.otrObject=otrObj;
        console.log('otrObj',this.otrObject);
        return this.otrObject;
    }


}
