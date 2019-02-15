/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService, NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router'; 
import { saveAs } from 'file-saver';
import { mailService } from '../../services/mail/mail.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {FsService} from 'ngx-fs';

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
    

     expense:any=[];
     value;
     values;

    csvarr = ["Country Name", "Name", "Dept", "Project", "customer", "Purpose", "Manager", "From Date", "To Date", "expType", "billAttached", "Amount\n"];
    // personalValue: object = {
    //     countryName: "SouthAfrica",
    //     Name: "Vinay",
    //     Dept: "Delivery",
    //     Project: "OTR",
    //     Customer: "Rahul",
    //     Purpose: "Travel",
    //     Manager: "Vinay",
    //     FromDate: "20 / 01 / 2019",
    //     toDate: "30 / 01 / 2019",

    //     expense: [{
    //         expType: "petrol",
    //         billAttached: true,
    //         amount: 3000

    //     }, {
    //         expType: "diesel",
    //         billAttached: true,
    //         amount: 200
    //     }]
    // };


    constructor(private route: ActivatedRoute, public pubsub: NPubSubService, 
    private bdms: NDataModelService, private router: Router, 
    private mService:mailService) {
        //
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        //console.log(this.personalValue)
        //localStorage.setItem('South Africa', JSON.stringify(this.South Africa));
        this.value = JSON.parse(localStorage.SouthAfrica);
        console.log('get value', this.value);
        this.expense=this.value.expense;
    }

    addExpense() {
        this.router.navigate(['home/expenseinfo']);    
    }
    a: any = {};
    createCSVandSendEmail() {
        console.log("this.valueeeee", this.value);
        let arr=[];
            console.log("this.value.expnesetype",this.value.expense);
            for(let i=0;i<this.value.expense.length;i++){
             let arr1= Object.keys(this.value.expense[i]).map(key => this.value.expense[i][key]);
             arr.push(arr1,"\n\t\t\t\t\t\t\t\t");
             console.log("this.arrr",arr);
            }
            this.value.expense = arr;
        var blob = new Blob([this.csvarr], { type: "text/csv;charset=utf-8" });
        let obj = Object.keys(this.value).map(key => this.value[key]);
        const submitData = obj;
        console.log("data...........",obj);
        console.log("this.a:",this.a);
        blob = new Blob([blob, [submitData]], { type: "text/csv;charset=utf-8" });
        saveAs(blob, "otr.csv");
    }
    mailingZip(){
        console.log(".................")
 this.mService.sendingMail();

    }
}
