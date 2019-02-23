/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService, NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
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
    otrValue;


    expenses: any = [];
    expenseArray;
    user;
    values;

    imagePath;
    showdetails = false
    showOtrDetails = [];
    

    constructor(private route: ActivatedRoute, 
        private bdms: NDataModelService, private router: Router,
        private mService: mailService, private otrInfo: otrdetailService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.showdetails = false
        this.showdetails = this.otrInfo.showdetails;
        if (this.showdetails) {
            this.showOtrDetails.push(this.otrInfo.showOtrDetails.expenseList[0]);
            console.log(this.showOtrDetails)
        }
        this.expenseArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));//this.otrInfo.country
        console.log('EXpense Array:', this.expenseArray);
        this.user = JSON.parse(localStorage.getItem("userdetail"));
        this.expenses = this.expenseArray[this.expenseArray.length - 1].expenseList;
        this.imagePath = this.expenses[this.expenses.length - 1].imageurl;
    }

    country;
    sendEmailto(){
        this.country=this.otrInfo.country;
        // console.log('hhfhgyjgfuhkl',this.country);
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





