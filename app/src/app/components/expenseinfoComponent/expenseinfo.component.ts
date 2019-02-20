/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { cameraService } from '../../services/camera/camera.service';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
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
    button1 = 'Yes';
    button2 = 'No';

    imgPath;
    img = false;
    expType;
    imageurl;
    billDate
    comment;
    expAmount;
    otr: any = {};
    otrDetail: any = {};
    //otrValue: Array = [];
    expenseDetail: any = [];
    otrArray: any = [];


    constructor(private bdms: NDataModelService, private camService: cameraService, private otrInfo: otrdetailService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        console.log('country name', this.otrInfo.country);
        this.otrArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));
        console.log("otr array", this.otrArray);
        this.otr = this.otrArray[this.otrArray['length'] - 1];
        console.log('1111111', this.otr)

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

        this.otrDetail['expType'] = this.expType;
        this.otrDetail['billDate'] = this.billDate;
        this.otrDetail['expAmount'] = this.expAmount;
        this.otrDetail['comments'] = this.comment;
        this.imageurl = this.imgPath;
        this.otrDetail['imageurl'] = this.imageurl;
        console.log('otr details expense info', this.otrDetail)

        this.detail(this.otrDetail);
        console.log('expense__--detail', this.expenseDetail);

        console.log('aa', this.otr);

        this.otrArray[this.otrArray['length'] - 1] = (this.otr);
        this.otrArray.push(this.otrArray[this.otrArray['length'] - 1]);
        this.otrArray.pop(this.otrArray[this.otrArray['length'] - 1])
        console.log('aa', this.otrArray);

        localStorage.setItem(JSON.stringify(this.otrInfo.country), JSON.stringify(this.otrArray));
        this.otrDetail = {}




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
