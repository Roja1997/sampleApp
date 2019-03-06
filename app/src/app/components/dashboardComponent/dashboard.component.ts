/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material';
import { imageserviceService } from '../../services/imageservice/imageservice.service';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'

})

export class dashboardComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    country: string = '';
    isShow: boolean = false;

    otrDetails: any = [];
    displayedColumns: string[] = ['receipt', 'fromDate', 'toDate', 'view'];
    dataSource: any;

    @ViewChild(MatSort) sort: MatSort;
    //for carosal
    dataSet;


    constructor(private bdms: NDataModelService, private imgService: imageserviceService, private otrdetailService: otrdetailService, private router: Router, private localStorage: NLocalStorageService, private snackbar: MatSnackBar) {
        super();
        this.dataSet = this.imgService.getImages();
        this.mm = new ModelMethods(bdms);
    }
    // countries = [

    //     { country: "Singapore", value: "Singapore" },
    //     { country: "South Africa", value: "South Africa" },
    //     { country: "Malaysia", value: "Malaysia" },
    //     { country: "India", value: "India" }
    // ]

    //fab function for carosal
    changeDataSet(dir) {
        if (dir == 1) {
            this.dataSet.push(this.dataSet.shift());
        }
        else {
            let temp = [];
            temp.push(this.dataSet.pop());
            for (let i = 0; i < this.dataSet.length; ++i) {
                temp.push(this.dataSet[i]);
            }
            this.dataSet = temp;

        }
    }

    otr: any = {};
    selectedIndex: number;
    //this function is for showing histroy for selected country.
    countryName(value, i) {
        this.selectedIndex = i;
        this.otrDetails = [];
        this.isShow = true;
        this.country = value;
        this.otrdetailService.country = value;
        this.otr = localStorage.getItem(value);
        if (!localStorage.getItem(value)) {
            this.snackbar.open('No active OTR histroy for selected country', 'close', { duration: 3000 });
        } else
            if (this.otr === null || JSON.parse(this.otr).length === 0)
                this.snackbar.open('No active OTR for selected country', 'close', { duration: 3000 });
            else {
                this.otrDetails.push(JSON.parse(this.otr));
            }
        this.dataSource = new MatTableDataSource(this.otrDetails[0]);

        this.dataSource.sort = this.sort;

    }

    //expenseList() function when i click on eye icon passing that pertcular obj to service to show in expense list page
    expenseList(singleOtr) {
        this.otrdetailService.otrObject(singleOtr);
        this.router.navigate(['home/expenselist']);

    }

    //addExpense() func to route to userdetails 
    addExpense() {
        if (this.isShow == true) {
            this.router.navigate(['home/userdetail']);
        } else {
            this.snackbar.open('select country', 'close', { duration: 3000 });
            this.router.navigate(['home/dashboard']);
        }
    }

    ngOnInit() {
        this.otrdetailService.country = null;
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
