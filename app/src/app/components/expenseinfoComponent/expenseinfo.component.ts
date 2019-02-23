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

    constructor(private bdms: NDataModelService,public router:Router ,private camService: cameraService, private otrInfo: otrdetailService,private datePipe: DatePipe) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
       
        console.log('country name', this.otrInfo.country);
        this.otrArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));
        console.log("otr array", this.otrArray);
        // this.otr = this.otrArray[this.otrArray['length'] - 1];
        console.log('1111111', this.otr)

    }
     //function to disable once the user takes date from date. 
    disableManualData(event) {
        event.preventDefault();
    }

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


    submit() {
        this.otrInfo.showdetails = false;
        this.otr = this.otrArray[this.otrArray['length'] - 1];
        this.otrDetail['expType'] = this.expType;
        this.otrDetail['billDate'] = this.billDate;
        this.otrDetail['expAmount'] = this.expAmount;
        this.otrDetail['comments'] = this.comment;
        this.imageurl = this.imgPath;
        this.otrDetail['imageurl'] = this.imageurl;
        // console.log('otr details expense info', this.otrDetail)

        this.detail(this.otrDetail);
        //console.log('expense__--detail', this.expenseDetail);

        // console.log('aa', this.otr);

        this.otrArray[this.otrArray['length'] - 1] = (this.otr);
        this.otrArray.push(this.otrArray[this.otrArray['length'] - 1]);
        this.otrArray.pop(this.otrArray[this.otrArray['length'] - 1])
        // console.log('aa', this.otrArray);

        localStorage.setItem(JSON.stringify(this.otrInfo.country), JSON.stringify(this.otrArray));
        this.otrDetail = {};
     //   this.router.navigate(['/home/expenselist']);
    }

expFill(event: any){
    this.amount=true;
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

        // this.otrArray.pop(this.otrArray[(this.otrArray.length) - 1]);
        // console.log('bb', this.otrArray);

        // localStorage.setItem(JSON.stringify(this.otrInfo.country), JSON.stringify(this.otrArray));
        // this.otrDetail={};
        
    //   this.router.navigate(['home/userdetail']);

    // }

}