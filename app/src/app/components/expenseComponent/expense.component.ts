/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-expense',
    templateUrl: './expense.template.html',
    providers: [DatePipe]

})

export class expenseComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    fromDate;
    toDate;
    otr: any = {};
    otrDetail: any = {};
    expensetdetail: any = [];
    
    constructor(private bdms: NDataModelService, private otrdetailService: otrdetailService, private router: Router, private datepipe: DatePipe) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    //mindate assigning
    minDate = new Date();

    ngOnInit() {
        console.log(this.otrdetailService.country);
    }
    
    //to get our tour total Days
    totaldays;
    totalDays(){
        this.totaldays= (((this.toDate.getTime() - this.fromDate.getTime()) / (24 * 60 * 60 * 1000)) + 1);
    }
    //pickFromDate fun
    pickFromDate() {
        console.log(this.datepipe.transform(this.fromDate, 'dd/MM/yyyy'));
        // this.toDate=new Date(this.fromDate.getTime()+(1000*24*60*60*29));
        this.toDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth() + 1, 0);
        console.log('from date', this.fromDate.toDateString());
        console.log('to date', this.toDate.toDateString());
    }
    //submitDate() fun
    submitDate() {
        // this.expensetdetail.fromDate=this.fromDate.toDateString();
        // this.expensetdetail.toDate=this.fromDate.toDateString();

        this.totaldays= (((this.toDate.getTime() - this.fromDate.getTime()) / (24 * 60 * 60 * 1000)) + 1);
        this.otrDetail['fromDate'] = this.datepipe.transform(this.fromDate, 'dd-MMM-yyyy');
        this.otrDetail['toDate'] = this.datepipe.transform(this.toDate, 'dd-MMM-yyyy');
        this.expensetdetail.push(this.otrDetail);
        console.log('expensetdetail', this.expensetdetail);
        this.otr.expenses = this.expensetdetail;
        console.log('final otr', this.otr);
        var countryname = this.otrdetailService.country;
        localStorage.setItem(countryname, JSON.stringify(this.otr));

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

    delete(dataModelName, filter) {
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
