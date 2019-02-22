/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
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
    Name;
    Department;
    Project;
    Customer; Manager;
    Purpose;
    otrDetail: any = {}
    otrDetails: any = {};
    expensetdetail: any = [];

    bindingName;
    constructor(private bdms: NDataModelService,private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.otrDetails = JSON.parse(localStorage.getItem('profile'));
        this.expensetdetail.push(this.otrDetails);

        console.log('user details ', this.expensetdetail[0].Name);
        this.Name = this.expensetdetail[0].Name;
        this.Department = this.expensetdetail[0].Department;
        this.Project = this.expensetdetail[0].Project;
        this.Manager = this.expensetdetail[0].Manager;
        this.Purpose = this.expensetdetail[0].Purpose;
        this.Customer = this.expensetdetail[0].Customer;

    }
    //profileData() fun
    profileData() {

        this.otrDetail['Name'] = this.Name;
        this.otrDetail['Department'] = this.Department;
        this.otrDetail['Project'] = this.Project;
        this.otrDetail['Customer'] = this.Customer;
        this.otrDetail['Purpose'] = this.Purpose;
        this.otrDetail['Manager'] = this.Manager;

        // this.otr=this.expensetdetail;
        localStorage.setItem('profile', JSON.stringify(this.otrDetail));
    }

add(){
    this.router.navigate(['home/expenseinfo']);
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
