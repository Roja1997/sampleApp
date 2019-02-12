/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService,NLocalStorageService,NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { otrdetailService} from '../../services/otrDetail/otrdetail.service';
import{ saveAs } from 'file-saver';
import * as fs from "file-system";

//import {Resolve,ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
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
    value;

      personalValue:object = {
             countryName: "SouthAfrica",
             Name: "Vinay",
             Dept: "Delivery",
             Project: "OTR",
             Customer: "Rahul",
         Purpose: "Travel",
             Manager: "Vinay",
            FromDate: "20 / 01 / 2019",
             toDate: "30 / 01 / 2019",
           
             expense:[{
                expType: "petrol",
                billAttached:true,
                amount:3000

             },{  expType: "diesel",
                billAttached:true,
                amount:200}]
         };
        

    constructor(private otrService:otrdetailService,private bdms: NDataModelService,private router:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
       console.log(this.personalValue)
     localStorage.setItem('personalValue',JSON.stringify(this.personalValue));
     this.value=(localStorage.personalValue);
     console.log('get value',this.value);
     this.value=JSON.parse(this.value);
    }

      
    

addExpense()
{
    this.router.navigate(['home/expenseinfo'])   
}

    createCSVandSendEmail(){
          this.value=JSON.stringify(this.value);
        this.otrService.writeToCSVAndEmail(localStorage.personalValue);
     var blob=new Blob([this.value],{type:"text/csv;charset=utf-8"});
     saveAs(blob,"otr.csv");

     this.value=JSON.parse(this.value);
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
