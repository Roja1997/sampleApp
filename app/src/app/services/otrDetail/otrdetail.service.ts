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
    // otrDetails(value){
    //     console.log('from service',value);
    //     this.router.navigate(['home/expense']);
    // }
    fromDate(arr) {
        console.log('service array', arr);
        this.dateArray = arr;
        

    }

}
