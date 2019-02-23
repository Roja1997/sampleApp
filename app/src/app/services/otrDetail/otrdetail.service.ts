/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class otrdetailService {
    country;
    dateArray;
    constructor(private route:Router) {
      
    }
    getValue(data)
    {
        this.dateArray = data;
        console.log(this.dateArray)
        this.route.navigate['home/expenseinfo'];
    }

}
