/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */
declare const navigator: any;
declare const cordova: any;
declare const textocr: any;

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
    Amount = false;
    thumb_nail;



    constructor(private bdms: NDataModelService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    // // accept(option) {
    // //     if (option === this.button1) {
    //     openCamera(){
    //         var that = this;
    //         navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 100, correctOrientation: true });
    //     }
    // }
    // onFail(message) 
    // {
    //     alert('Failed because: ' + message);
    // }

    // onSuccess(imageData)
    //  {
    //     textocr.recText(0, 3, imageData, onSuccess, onFail);
    //     function onSuccess(recognizedText) {
    //         console.log(recognizedText)
    //         alert(recognizedText);
    //     }
    //     function onFail(message) {
    //         alert('Failed because: ' + message);
    //     }


    // }

    //needed code

//  setOptions(srcType) {
//     var options = {
//         // Some common settings are 20, 50, and 100
//         quality: 50,
//         destinationType: Camera.DestinationType.FILE_URI,
//         // In this app, dynamically set the picture source, Camera or photo gallery
//         sourceType: srcType,
//         encodingType: Camera.EncodingType.JPEG,
//         mediaType: Camera.MediaType.PICTURE,
//         allowEdit: true,
//         correctOrientation: true  //Corrects Android orientation quirks
//     }
//     return options;
// }

 openCamera() {
     let opts={
         quality:100,
         destinationType:1,
         sourceType:1,
         encodingType:0,
         mediaType:0,
         saveToPhotoAlbum:true,
         cameraDirection:0,
         targetWidth:100,
         targetHeight:100

     }
     navigator.camera.getPicture(this.cameraSuccess, this.cameraError, opts);


 }

cameraSuccess(imageURI){
// this.thumb_nail.src=imageURI;
// console.log(this.thumb_nail.src);
console.log(imageURI);

}

 cameraError(message){
    console.log('message',message)
}

 amount()
 {
   this.Amount=true;
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
