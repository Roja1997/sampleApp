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
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { conformationComponent } from '../conformationComponent/conformation.component';

@Component({
    selector: 'bh-expenselist',
    templateUrl: './expenselist.template.html'
})

export class expenselistComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    expenseArray;
    showButton = true;
    showSpinner = false;

    constructor(private route: ActivatedRoute,
        private bdms: NDataModelService, private router: Router,
        private mService: mailService, private otrInfo: otrdetailService, private snackbar: MatSnackBar,private dialog: MatDialog) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        // console.log(this.otrInfo.viewOtr);
        if (this.otrInfo.viewOtr) {
            this.showButton = false;
            this.expenseArray = this.otrInfo.otrValue.expenseList;
            console.log('Expense Array:', this.expenseArray.imageurl);
        }
        else {
            let otrArray = JSON.parse(localStorage.getItem(this.otrInfo.country));
            this.expenseArray = otrArray[otrArray['length'] - 1].expenseList;

        }
    }

    country;
    sendEmailto() {
        console.log(this.zipFileName);
        this.otrInfo.sendEmail(this.zipFileName);
        this.router.navigate(['home/afterSendingMail']);

    }

    addExpense() {
        this.router.navigate(['home/expenseinfo']);
    }
    zipFileName;
    booleanvalue = false;
    sendingMail() {
        this.showSpinner = true;
        //this.showButton = true;
        this.mService.sendingMail().subscribe(result => {

            this.zipFileName = result;
            console.log('hello.......', this.zipFileName);
            if (result) {
                this.showSpinner = false;
                this.booleanvalue = true;
                this.snackbar.open('you have successfully submited', 'close', { duration: 3000 })

            } else {
                this.showSpinner = true;
            }
        });

    }

    isPopupOpened = true;
    openDialog(): void {

        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(conformationComponent, {
            width: '600px',
            data: {}, disableClose: true
        });


        dialogRef.afterClosed().subscribe(result => {

            this.isPopupOpened = false;
            


        });
    }

}





