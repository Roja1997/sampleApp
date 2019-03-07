/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatSnackBar } from '@angular/material';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { conformationComponent } from '../conformationComponent/conformation.component';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    flag: boolean;
    constructor(private bdms: NDataModelService, private otrdetailService: otrdetailService, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.flag = this.otrdetailService.flag;
    }
    edit() {
        if (this.otrdetailService.country)
            this.router.navigate(['home/userdetail']);
        else {
            this.snackbar.open('select country', 'close', { duration: 3000 });
            this.router.navigate(['home/dashboard']);
        }
    }
    //dialog box
    isPopupOpened = true;
    openDialog(): void {

        this.isPopupOpened = true;
        const dialogRef = this.dialog.open(conformationComponent, {
            width: '600px',
            data: {}, disableClose: true
        });


        dialogRef.afterClosed().subscribe(result => {

            this.isPopupOpened = false;
            this.otrdetailService.flag = false;


        });
    }
    //dashboardView() func
    dashboardView() {
        // console.log('bb',this.otrdetailService.flag);
        if (this.otrdetailService.flag == true)
            this.openDialog();
        else
            this.router.navigate(['home/dashboard']);
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
