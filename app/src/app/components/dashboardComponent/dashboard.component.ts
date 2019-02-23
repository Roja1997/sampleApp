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
    // otr={};
    otrDetails: any = [];
    displayedColumns: string[] = ['receipt', 'fromDate', 'toDate', 'view'];
    dataSource: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    //for carosal
    dataSet;
    

    constructor(private bdms: NDataModelService, private imgService: imageserviceService, private otrdetailService: otrdetailService, private router: Router, private localStorage: NLocalStorageService, private snackbar: MatSnackBar) {
        super();
        this.dataSet = this.imgService.getImages();
        this.mm = new ModelMethods(bdms);
    }
    countries = [

        { country: "Singapore", value: "Singapore" },
        { country: "South Africa", value: "South Africa" },
        { country: "Malaysia", value: "Malaysia" },
        { country: "India", value: "India" }
    ]

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
    countryName(value) {
        this.otrDetails=[];
        this.isShow = true;
        this.country = value;
        this.otrdetailService.country = value;
        this.otr = localStorage.getItem(value);
        if(this.otr==null)
            this.snackbar.open('No active OTR for selected country', 'close', { duration: 3000 });
        this.otrDetails.push(JSON.parse(this.otr));
        // console.log('this.otr array',this.otrDetails[0]);
        this.dataSource = new MatTableDataSource(this.otrDetails[0]);
        // this.dataSource.paginator = this.otrDetails.length;
        // this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    //expenseList()
    expenseList(a) {
        this.otrdetailService.otrObject(a);
        this.router.navigate(['home/expenselist']);
        //console.log('eye', a, "bhagya component based on date you shoud show expenses of otr");
    }

    //addExpense() func
    addExpense() {
        if (this.isShow == true) {
            this.router.navigate(['home/userdetail']);
        } else {
            this.snackbar.open('select country', 'close', { duration: 3000 });
            this.router.navigate(['home/dashboard']);
        }
    }

    ngOnInit() {

    }

    //  //apply filter
    // applyFilter(filterValue: string) {
    //     this.dataSource.filter = filterValue.trim().toLowerCase();
    //     if (this.dataSource.paginator) {
    //         this.dataSource.paginator.firstPage();
    //     }
    // }



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
    // //hard coded expenses details"path": "expense",
    // expenses= [{
    //     fromDate: "12/09/2019",
    //     toDate: "31/09/ 2019",
    //     expType: "fuel",
    //     billAttached: "true",
    //     amount:"1000"
    // },{
    //     fromDate: "01/12/2019",
    //     toDate: "31/12/ 2019",
    //     expType: "fuel",
    //     billAttached: "true",
    //     amount:"2000"
    // }]
    // //countryName fun
    //  countryName(value){

    //     this.isShow=true;
    //     var otr = {

    //         Name: "Vinay",
    //         Department: "Delivery",
    //         Project: "OTR",
    //         Customer: "Rahul",
    //         Purpose: "Travel",
    //         Manager: "Vinay",
    //         Destination:value,
    //         expenses: this.expenses
    //     };
    //     console.log('this.value',value);
    //     localStorage.setItem(JSON.stringify(value),JSON.stringify(otr));
    // }


}
