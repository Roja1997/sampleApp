/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService, NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
//import { saveAs } from 'file-saver';
import { mailService } from '../../services/mail/mail.service';
import { cameraService } from '../../services/camera/camera.service';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Component({
    selector: 'bh-expenselist',
    templateUrl: './expenselist.template.html'
})

export class expenselistComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    expenseArray;
    showSubmitButton = true;
    constructor(private route: ActivatedRoute,
        private bdms: NDataModelService, private router: Router,
        private mService: mailService, private otrInfo: otrdetailService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        console.log(this.otrInfo.viewOtr);
        if (this.otrInfo.viewOtr){
            this.showSubmitButton = false;
            this.expenseArray = this.otrInfo.otrValue.expenseList;
            console.log('Expense Array:',this.expenseArray);
        }
        else {
            let otrArray = JSON.parse(localStorage.getItem(this.otrInfo.country));
            this.expenseArray = otrArray[otrArray['length'] - 1].expenseList;
            console.log(this.expenseArray);
        }
    }

    country;
    sendEmailto() {
        this.country = this.otrInfo.country;
        this.otrInfo.sendEmail(this.country);
    }

    addExpense() {
        this.router.navigate(['home/expenseinfo']);
    }
    a: any = {};

    sendingMail() {

        this.mService.sendingMail();

    }

}





