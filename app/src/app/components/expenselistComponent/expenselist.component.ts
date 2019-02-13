/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService, NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router'; 
import { saveAs } from 'file-saver';


import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-expenselist',
    templateUrl: './expenselist.template.html'
})

export class expenselistComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    expensevalue;
    value;
    csvarr = ["Country Name", "Name", "Dept", "Project", "customer", "Purpose", "Manager", "From Date", "To Date", "expType", "billAttached", "Amount\n"];
    personalValue: object = {
        countryName: "SouthAfrica",
        Name: "Vinay",
        Dept: "Delivery",
        Project: "OTR",
        Customer: "Rahul",
        Purpose: "Travel",
        Manager: "Vinay",
        FromDate: "20 / 01 / 2019",
        toDate: "30 / 01 / 2019",

        expense: [{
            expType: "petrol",
            billAttached: true,
            amount: 3000

        }, {
            expType: "diesel",
            billAttached: true,
            amount: 200
        }]
    };


    constructor(private route: ActivatedRoute, public pubsub: NPubSubService, private bdms: NDataModelService, private router: Router, private localStorage: NLocalStorageService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        console.log(this.personalValue)
        localStorage.setItem('personalValue', JSON.stringify(this.personalValue));
        this.value = JSON.parse(localStorage.personalValue);
        console.log('get value', this.value);
        //  this.value=JSON.parse(this.value);




    }



    addExpense() {
        this.router.navigate(['home/expenseinfo'])
    }
    a: any = {};
    createCSVandSendEmail() {
        // this.value=JSON.stringify(this.value);
        console.log("this.valueeeee", this.value);


        let arr=[];
            console.log("this.value.expnesetype",this.value.expense);
            for(let i=0;i<this.value.expense.length;i++){
                console.log("inside for loop",this.value.expense[i].expType);
                arr.push(this.value.expense[i].expType);
                arr.push(this.value.expense[i].billAttached);
                arr.push(this.value.expense[i].amount, "\n\t\t\t\t\t\t\t\t");

            }
           console.log("this.arrr",arr);

            this.value.expense = arr;



        var blob = new Blob([this.csvarr], { type: "text/csv;charset=utf-8" });

        //this.a = Object.values(JSON.parse(this.value));

        // for(let i = 0; i < this.value[8].length; i++) {
        //     console.log(this.value[8][i]);
        // }

        this.a = Object.values(this.value);
        console.log(this.value)
        console.log("this.a", this.a[9]);
        if (this.a[9]) {
            // console.log("this.a.expense",this.a.expense);
            // Object.values(JSON.stringify(this.value))
            console.log('aaa', Object.values(this.a[9]))
        } else {
            // Object.values(JSON.parse(this.value));
            //   console.log('aaa',Object.values(JSON.parse(this.value)))
        }
        // console.log("aaaaaa",a);


        //   for(let i of JSON.parse(this.value).expense){
        //       this.expensevalue = i;
        //                               console.log('value item',this.expensevalue);
        //   a.expense =  this.expensevalue;
        //   console.log(a);

        //   }

        const submitData = this.a;

        console.log(submitData)


        blob = new Blob([blob, [submitData]], { type: "text/csv;charset=utf-8" });
        saveAs(blob, "otr.csv");
        //  "this.value.countryName","this.value.Name"


        // this.value=JSON.parse(this.value);
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
