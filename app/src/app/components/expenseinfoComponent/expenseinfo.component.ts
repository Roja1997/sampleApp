/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { cameraService } from '../../services/camera/camera.service';

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
     img=false;
     expType;
     imageurl;
     expAmount;

    constructor(private bdms: NDataModelService,private camService:cameraService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    openCamera() {
        this.img=true;
         this.camService.camera().then((path)=>{
             console.log('path',path);
             this.imgPath=path;
         
         }).catch((error)=>{
             console.log(error);

         });


         
    }


  

submit(){

    
    console.log(this.expType);
    this.imageurl=this.imgPath;
    console.log(this.imageurl);
    
    console.log(this.expAmount);

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
