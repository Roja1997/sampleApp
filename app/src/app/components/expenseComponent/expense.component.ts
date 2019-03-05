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

    otrDetail: any = {};
    expensetdetail: any = [];
    totaldays;
    //for userdetail page
    Name; Department; Project; Customer; Manager; Purpose;
    constructor(private bdms: NDataModelService, private otrdetailService: otrdetailService, private snackbar: MatSnackBar, private router: Router, private datepipe: DatePipe) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    //mindate assigning
    minDate = new Date();

    ngOnInit() {
        this.expensetdetail = JSON.parse(localStorage.getItem((this.otrdetailService.country)));
    }

    previousView() {
        this.router.navigate(['home/userdetail']);
    }
    //function to disable once the user takes date from date. 
    disableManualData(event) {
        event.preventDefault();
    }

    //pickFromDate fun
    perdiamAmount;
    perdiamAmountINR;
    perdiemObj: any = {};
    countryName;
    pickFromDate() {
        this.toDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth() + 1, 0);
        this.totaldays = (((this.toDate.getTime() - this.fromDate.getTime()) / (24 * 60 * 60 * 1000)) + 1);
        this.countryName = this.otrdetailService.country;
        this.perdiemObj['countryName'] = this.countryName;
        this.perdiemObj['totaldays'] = this.totaldays;
        //calling service for currency converted and getting total perdiem Amount
        this.otrdetailService.currencyConverter(this.perdiemObj).subscribe(res => {
            // console.log(res);
            this.perdiamAmountINR = res['totalAmount'];
        });

        if (this.countryName == "Singapore")
            this.perdiamAmount = (this.totaldays * 45);
        else if (this.countryName == "South Africa")
            this.perdiamAmount = (this.totaldays * 300);
        else if (this.countryName == "Malaysia")
            this.perdiamAmount = (this.totaldays * 85);
        else
            this.perdiamAmount = (this.totaldays * 650);
        // console.log(this.countryName, this.perdiamAmount);

    }
    //submitDate() function
    userdetailobj: any = {};
    userdetailObject;
    submitDate() {
        this.userdetailobj = this.otrdetailService.userdetailObject;
        this.otrDetail['Name'] = this.userdetailobj.Name;
        this.otrDetail['country'] = this.userdetailobj.country;
        this.otrDetail['Department'] = this.userdetailobj.Department;
        this.otrDetail['Project'] = this.userdetailobj.Project;
        this.otrDetail['Customer'] = this.userdetailobj.Customer;
        this.otrDetail['Manager'] = this.userdetailobj.Manager;
        this.otrDetail['Purpose'] = this.userdetailobj.Purpose;
        this.otrDetail['fromDate'] = this.datepipe.transform(this.fromDate, 'dd-MMM-yyyy');
        this.otrDetail['toDate'] = this.datepipe.transform(this.toDate, 'dd-MMM-yyyy');
        this.otrDetail['PerdiemAmount'] = this.perdiamAmount;
        this.otrDetail['perdiemAmountINR'] = this.perdiamAmountINR;
        if (this.expensetdetail == null)
            this.expensetdetail = [];
        this.expensetdetail.push(this.otrDetail);
        var countryname = this.otrdetailService.country;
        localStorage.setItem(countryname, JSON.stringify(this.expensetdetail));
        this.otrDetail = {};
        this.router.navigate(['home/expenseinfo']);


    }
}