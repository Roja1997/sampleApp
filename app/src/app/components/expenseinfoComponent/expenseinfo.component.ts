/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { cameraService } from '../../services/camera/camera.service';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */


@Component({
    selector: 'bh-expenseinfo',
    templateUrl: './expenseinfo.template.html'
})

export class expenseinfoComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    expenseType = ["Perdiem Charges", "Airticket/Visa Charges", "GuestHouse Charges", "Hotel Charges", "Onsite Telephone Charges",
        "Onsite Conveyance Charges", "Petrol/Fuel Expenses", "Sales Promotion", "Staff Welfare Expenses", "Travel Food Expenses"]
    amount = false;
    imgPath;
    img = false;
    expType;
    imageurl;
    billDate='';
    comment='';
    expAmount='';
    otr: any = {};
    otrDetail: any = {};
    //otrValue: Array = [];
    expenseDetail: any = [];
    otrArray: any = [];
    minDate;
    maxDate;
    num = 10000;
    billAmount = '';
    count=0;

    
    constructor(private bdms: NDataModelService, private camService: cameraService, private otrInfo: otrdetailService, private datePipe: DatePipe, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

        console.log('country name', this.otrInfo.country);
        this.otrArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));

        console.log("otr array old ", this.otrArray);
        console.log((this.otrArray.length)-1);

        this.otr = this.otrArray[(this.otrArray.length)-1];
        console.log('otr new ', this.otr);
        console.log(this.otr.fromDate);
        var fromDate = this.otr.fromDate;
        console.log('from date', fromDate);
        var toDate = this.otr.toDate;
        console.log('to date', toDate);
        this.minDate = this.datePipe.transform(fromDate, "yyyy-MM-dd");
        console.log('new formatted date', this.minDate);
        this.maxDate = this.datePipe.transform(toDate, "yyyy-MM-dd");
        console.log('new formatted date', this.maxDate);

    }

    preventuserTyping(event) {
        event.preventDefault();
    }
prevent(event){
     const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
   
    }
}
 
    expFill(event) {
           this.amount=true;
        let num = event.target.value;
        if (typeof num === 'string' && num !== '')
            num = parseFloat(num.replace(/,/g, ''));
        let str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1,');
        }
        str = str.join('.');
        this.billAmount = str;
        return str;
        
      
    }

    //camera code
    openCamera() {
        this.img = true;
        this.camService.camera().then((path) => {
            console.log('path', path);
            this.imgPath = path;
        }).catch((error) => {
            console.log(error);
        });
    }

    detail(a) {
        this.expenseDetail.push(a);
        this.otr.expenseList = this.expenseDetail;
    }

 tempvar=[]
    submit() {
       
        var bill=this.datePipe.transform(this.billDate, "dd-MMM-yyyy");
        console.log('new bill date',bill);
        this.otrDetail['expType'] = this.expType;
        this.otrDetail['billDate'] = bill;
        this.otrDetail['expAmount'] = this.expAmount;
        this.otrDetail['comments'] = this.comment;
        this.imageurl = this.imgPath;
        this.otrDetail['imageurl'] = this.imageurl;
        console.log('otr details expense info', this.otrDetail)
        this.tempvar.push(this.otrDetail)


        // this.expType='';
        // this.billDate='';
        // this.comment=''

        this.detail(this.otrDetail);
        console.log('expense__detail', this.expenseDetail);

        console.log('aa', this.otr);
        
        this.otrArray[(this.otrArray.length) - 1] = (this.otr);
  
        this.otrArray.pop(this.otrArray[(this.otrArray.length) - 1]);
         this.otrArray.push(this.otrArray[(this.otrArray.length) - 1]);

         console.log('bb', this.otrArray);

        console.log('bb', this.otrArray);

        localStorage.setItem(JSON.stringify(this.otrInfo.country), JSON.stringify(this.otrArray));
        this.otrDetail={};
        
      this.router.navigate(['home/expenselist']);

    }

}