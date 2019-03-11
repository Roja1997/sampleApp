/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-conformation',
    templateUrl: './conformation.template.html'
})

export class conformationComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    constructor(private bdms: NDataModelService, private otrdetailService: otrdetailService, private router: Router, public dialogRef: MatDialogRef<conformationComponent>) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }
    //when user clicks no then close the dialog box
    dontApply() {
        this.dialogRef.close();
    }
    //to remove the recent data
    expenseObj: any = [];
    removeData() {
        this.expenseObj = JSON.parse(localStorage.getItem(this.otrdetailService.country));
        this.expenseObj.pop();
        localStorage.setItem(this.otrdetailService.country, JSON.stringify(this.expenseObj));
        this.router.navigate(['home/expense']);
        this.dialogRef.close();
    }

}
