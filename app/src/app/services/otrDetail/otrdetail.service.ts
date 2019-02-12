/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NLocalStorageService} from 'neutrinos-seed-services';
@Injectable()
export class otrdetailService {

constructor(private http: HttpClient)
{

}
    otrDetails(value){
        console.log('from service',value);
    }


    

    writeToCSVAndEmail(data)
    {
        return this.http.post('http://127.0.0.1:24483/register',{'Name':'bhagya'});
        
    }    
}
