/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    
    isShow:boolean=false;
    constructor(private bdms: NDataModelService,private otrdetailService:otrdetailService) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    countries  = [
        { country: "South Africa", value: "South Africa" },
        { country: "Singapore", value: "Singapore" },
        { country: "Malaysia", value: "Malaysia" }
    ]
    //hard coded expenses details
    expense = [{
        FromDate: "20 / 01 / 2019",
        toDate: "30 / 01 / 2019",
        expType: "fuel",
        billAttached: "true",
        amount:"1000"
    }]
    //countryName fun
    /* countryName(value){
        
        this.isShow=true;
        var otr = {
            country: value,
            Name: "Vinay",
            Department: "Delivery",
            Project: "OTR",
            Customer: "Rahul",
            Purpose: "Travel",
            Manager: "Vinay",
            Destination:value,
            expType: this.expense
        };
        localStorage.setItem('otr',JSON.stringify(otr));
    }

    */
    countryName(value){
        this.isShow=true;
        localStorage.setItem('otr',JSON.stringify(value));
        // this.otrdetailService.otrDetails(value);
    }


    ngOnInit() {
        
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
