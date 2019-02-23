/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import {expenselistresolverService} from '../../services/expenseListResolver/expenselistresolver.service';
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
    img;
    imgPath;
    otr: any = {};
    // otr: any = {};
    otrDetail: any = {};
    expensetdetail: any = [];
    totaldays;
    constructor(private expenseService:expenselistresolverService,private bdms: NDataModelService, private otrdetailService: otrdetailService,private snackbar: MatSnackBar, private router: Router, private datepipe: DatePipe) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    //mindate assigning
    minDate = new Date();

    ngOnInit() {
        // console.log('ff',this.fromDate);
        //         console.log('ff',this.toDate);

        console.log(this.otrdetailService.country);
        this.expensetdetail = JSON.parse(localStorage.getItem((this.otrdetailService.country)));
        console.log('this.exp', this.expensetdetail);


    }

    //to get our tour total Days
    //function to disable once the user takes date from date. 
    disableManualData(event) {
        event.preventDefault();
    }

    //pickFromDate fun
    pickFromDate() {
        console.log(this.datepipe.transform(this.fromDate, 'dd/MM/yyyy'));
        // console.log('checking',this.expensetdetail[0].fromDate);
        // if(this.expensetdetail[0].fromDate==this.datepipe.transform(this.fromDate, 'dd-MMM-yyyy')){
        //     this.snackbar.open('already claimed for these OTR add different OTR', 'close', { duration: 3000 });
        //     this.router.navigate(['/home/expense']);
        // }
        // this.toDate=new Date(this.fromDate.getTime()+(1000*24*60*60*29));
        this.toDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth() + 1, 0);
        console.log('from date', this.fromDate.toDateString());
        console.log('to date', this.toDate.toDateString());
        this.totaldays = (((this.toDate.getTime() - this.fromDate.getTime()) / (24 * 60 * 60 * 1000)) + 1);
    }
    //submitDate() function
    submitDate() {
        
        this.otrDetail['fromDate'] = this.datepipe.transform(this.fromDate, 'dd-MMM-yyyy');
        this.otrDetail['toDate'] = this.datepipe.transform(this.toDate, 'dd-MMM-yyyy');
        if (this.expensetdetail == null)
            this.expensetdetail = [];
        console.log('this.otrDetail', this.otrDetail);
        this.expensetdetail.push(this.otrDetail);
        var countryname = this.otrdetailService.country;
        // this.otr=this.expensetdetail;
        this.otrdetailService.getValue(this.expensetdetail)
       // this.expenseService.setLocalStorage(countryname,this.expensetdetail);
       localStorage.setItem(countryname, JSON.stringify(this.expensetdetail));
        this.otrDetail = {};
       this.router.navigate(['home/expenseinfo']);


    }
}