/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService,NLocalStorageService,NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';

import {Resolve,ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-expenselist',
    templateUrl: './expenselist.template.html'
})

export class expenselistComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    //  personalValue:any = {
    //         countryName: "SA",
    //         Name: "Vinay",
    //         Dept: "Delivery",
    //         Project: "OTR",
    //         Customer: "Rahul",
    //         Purpose: "Travel",
    //         Manager: "Vinay",
    //         FromDate: "20 / 01 / 2019",
    //         toDate: "30 / 01 / 2019",
           
    //         expense:[{
    //            expType: "petrol",
    //            billAttached:true,
    //            amount:3000

    //         }]
    //     };

    constructor(private route:ActivatedRoute,public pubsub:NPubSubService,private bdms: NDataModelService,private router:Router,private localStorage:NLocalStorageService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    this.route.data.subscribe((res)=>{
        
        console.log(res)
    })
    
        
    }

      
    

addExpense()
{
    this.router.navigate(['/expenseinfo'])   
}
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
