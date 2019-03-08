/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { cameraService } from '../../services/camera/camera.service';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { DatePipe } from '@angular/common';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


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
    minDate;
    maxDate;
    img = false;
    imgPath;
    imageurl;
    expType;
    billDate;
    bill;
    billName;
    expAmount;
    comment;


    otr: any = {};
    otrDetail = {};
    expenseDetail = [];
    otrArray = [];









    constructor(private bdms: NDataModelService, private camService: cameraService, private otrInfo: otrdetailService, private datePipe: DatePipe, private router: Router, private route: ActivatedRoute) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

        this.otrArray = JSON.parse(localStorage.getItem(this.otrInfo.country));

        this.otr = this.otrArray[(this.otrArray.length) - 1];
        if (this.otr.expenseList) {
            this.expenseDetail = this.otr.expenseList;
        }

        this.minDate = this.datePipe.transform(this.otr.fromDate, "yyyy-MM-dd");
        this.maxDate = this.datePipe.transform(this.otr.toDate, "yyyy-MM-dd");
    }


    //function to disable once the user takes date from date. 

    preventuserTyping(event) {
        event.preventDefault();
    }


    openCamera() {
        this.img = true;
        this.camService.camera().then((path) => {
            console.log('image path', path);
            this.imgPath = path;
            return path;

        }).catch((error) => {
            console.log(error);
        });

    }





    submit() {
        this.otrInfo.viewOtr = false;
        this.bill = this.datePipe.transform(this.billDate, "dd-MMM-yyyy");
        this.otrDetail['expType'] = this.expType;
        this.otrDetail['billName'] = this.billName + " _ " + this.expType;
        this.otrDetail['billDate'] = this.bill;

        switch (this.otrInfo.country) {
            case 'South Africa': this.expAmount = (this.expAmount * 5.10).toFixed(2);
                break;

            case 'Malaysia': this.expAmount = (this.expAmount * 17.46).toFixed(2);
                break;
            case 'Singapore': this.expAmount = (this.expAmount * 52.63).toFixed(2);
                break;
            default: this.expAmount = (this.expAmount * 1).toFixed(2);
                break;
        }
        this.otrDetail['expAmount'] = this.expAmount;
        this.otrDetail['comment'] = this.comment;
        this.imageurl = this.imgPath;
        this.otrDetail['imageurl'] = this.imageurl;
        this.expenseDetail.push(this.otrDetail);
        this.otr['expenseList'] = this.expenseDetail;
        this.otrArray.push(this.otr);
        this.otrArray.pop();
        localStorage.setItem(this.otrInfo.country, JSON.stringify(this.otrArray));
     //   this.otrDetail = {};
//this.otr = {};
        this.router.navigate(['/home/expenselist']);

    }

}