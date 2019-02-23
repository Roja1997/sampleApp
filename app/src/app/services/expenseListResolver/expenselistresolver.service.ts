/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NSystemService, NSessionStorageService, NLocalStorageService } from 'neutrinos-seed-services';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
// import { Router } from '@angular/router';
@Injectable()
export class expenselistresolverService {
    constructor(private route: ActivatedRoute, private localStorage: NLocalStorageService, public router: Router,
     private otrInfo: otrdetailService) {


    }
    resolve(route: ActivatedRouteSnapshot) {
        let currentCountry =localStorage.getItem(this.otrInfo.country);
        
        //let that = this;
        return new Promise((resolve, reject) => {
            console.log("here", currentCountry);
            if (currentCountry) {
                
                
                return resolve(currentCountry);
            }
            else {

                this.router.navigate(['/home/dashboard']);
                console.log('tried to navigate');

                return resolve("asdas");
            }
        });

    }
}