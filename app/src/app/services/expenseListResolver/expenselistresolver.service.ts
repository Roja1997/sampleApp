/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import {Resolve,ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {NSystemService,NSessionStorageService,NLocalStorageService} from 'neutrinos-seed-services';
@Injectable()
export class expenselistresolverService {
constructor(private route:ActivatedRoute,private localStorage:NLocalStorageService,private Router:Router){
  

}
  resolve(route:ActivatedRouteSnapshot){
      
let currentCountry=this.localStorage.getValue('personalValue');
if(currentCountry)
return currentCountry;
    else 
  return this.router.navigate('home/dashboard');
    
    }
  
}
