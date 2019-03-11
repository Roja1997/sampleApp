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
    ngOnInit() {
        this.otrdetailService.country = null;
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
        if (!localStorage.getItem(value) || JSON.parse(this.otr).length === 0)
            this.snackbar.open('No active OTR histroy for selected country', 'close', { duration: 3000 });
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





}
