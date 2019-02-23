/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSnackBar } from '@angular/material';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { Router } from '@angular/router';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-userdetail',
    templateUrl: './userdetail.template.html'
})

export class userdetailComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    Name;Department;Project;Customer; Manager;country;Purpose;
    otrDetail: any = {}
    otrDetails: any = {};
    expensetdetail: any = [];

    bindingName;
    constructor(private bdms: NDataModelService,private otrdetailService:otrdetailService,private router:Router, private snackbar: MatSnackBar) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    
    ngOnInit() {
        this.otrDetails = JSON.parse(localStorage.getItem('userdetail'));
        this.expensetdetail.push(this.otrDetails);

        
        this.Name = this.expensetdetail[0].Name;
        this.Department = this.expensetdetail[0].Department;
        this.Project = this.expensetdetail[0].Project;
        this.Manager = this.expensetdetail[0].Manager;
        this.Purpose = this.expensetdetail[0].Purpose;
        this.Customer = this.expensetdetail[0].Customer;
        this.country=this.otrdetailService.country;
    }
    //profileData() fun
    profileData() {
        this.otrDetail['country']=this.otrdetailService.country;
        this.otrDetail['Name'] = this.Name;
        this.otrDetail['Department'] = this.Department;
        this.otrDetail['Project'] = this.Project;
        this.otrDetail['Customer'] = this.Customer;
        this.otrDetail['Purpose'] = this.Purpose;
        this.otrDetail['Manager'] = this.Manager;
      
        this.otrdetailService.userDetailObject(this.otrDetail);
        localStorage.setItem('userdetail', JSON.stringify(this.otrDetail));
        this.snackbar.open('successfully edited', 'close', { duration: 3000 });
         this.router.navigate(['home/expense']);
    }

    sendEmailto(){
        // this.country=this.otrdetailService.country;
        // console.log('hhfhgyjgfuhkl',this.country);
       // this.otrdetailService.sendEmail();
    }

    sendEmailto1(){
        this.country=this.otrdetailService.country;
     
        this.otrdetailService.sendEmail(this.country);
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
