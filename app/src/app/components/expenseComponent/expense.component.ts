/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import {Router} from '@angular/router'
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-expense',
    templateUrl: './expense.template.html'
})

export class expenseComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    fromDate;
    toDate;
    otr={};
    otrDetail:any=[];
    constructor(private bdms: NDataModelService,private otrdetailService: otrdetailService, private router:Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    //mindate assigning
    minDate = new Date();
    
    ngOnInit() {
        console.log(this.otrdetailService.country)
    }
   
    //pickFromDate fun
    pickFromDate(){
        this.toDate=new Date(this.fromDate.getTime()+(1000*24*60*60*29));
        console.log('from date',this.fromDate.toDateString());
        console.log('to date', this.toDate.toDateString());
        }
    //submitDate() fun
    submitDate(){
        console.log('for storing dates into localstorage');
        // this.otr['country']=this.otrdetailService.country;
        this.otr['fromDate']=this.fromDate.toDateString();
        // console.log("this.fromDate",this.fromDate.toDateString());
        this.otr['toDate']=this.toDate.toDateString();
        this.otrDetail.push(JSON.stringify(this.otr));
        console.log('arr',this.otrDetail)
        localStorage.setItem(JSON.stringify(this.otrdetailService.country),this.otrDetail);
        //this.router.navigate(['home/expenselist']);
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
