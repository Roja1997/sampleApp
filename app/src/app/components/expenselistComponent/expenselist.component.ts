/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLocalStorageService, NPubSubService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { otrdetailService } from '../../services/otrDetail/otrdetail.service';
import {Resolve,ActivatedRoute,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
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
    otrValue;


    expenses: any = [];
    expenseArray;
    user;
    values;

    constructor(private route:ActivatedRoute,public pubsub:NPubSubService, private otrdetailService: otrdetailService,private bdms: NDataModelService,private router:Router,private localStorage:NLocalStorageService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
    console.log('in expenselist',this.otrdetailService.otrValue);
    
        
        this.user = JSON.parse(localStorage.getItem("profile"));
        this.expenses = this.expenseArray[this.expenseArray.length - 1].expenseList;
        this.imagePath = this.expenses[this.expenses.length - 1].imageurl;
    }


    addExpense() {
        this.router.navigate(['home/expenseinfo']);
    }
    a: any = {};
   //using tns-filesystem framework 
    // fileName: string;
    // fileContent: any;
    // dirName: string;
    //  public folderName: string;
    //     public fileName: string;
    //     public fileTextContent: string;

    //     public successMessage: string;
    //     public writtenContent: string;
    //     public isItemVisible: boolean = false;

    //     public file: File;
    //     public folder: Folder;
    // createDirectory() {
    //     let documents = knownFolders.documents();
    //     this.folder = documents.getFolder(this.folderName || "testFolder");
    //     this.file = this.folder.getFile((this.fileName || "testFile") + ".txt");

    //     this.file.writeText(this.fileTextContent || "some random content")
    //         .then(result => {
    //             this.file.readText()
    //                 .then(res => {
    //                     this.successMessage = "Successfully saved in " + this.file.path;
    //                     this.writtenContent = res;
    //                     this.isItemVisible = true;
    //                 });
    //         }).catch(err => {
    //             console.log(err);
    //         });
    // }
  //using cordova file plugin  
    // createFile() {
    //     window.webkitRequestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

    //         console.log('file system open: ' + fs.name);
    //         fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

    //             console.log("fileEntry is file?" + fileEntry.isFile.toString());
    //             fileEntry.name == 'someFile.txt'
    //             fileEntry.fullPath == '/someFile.txt'
    //             //writeFile(fileEntry, null);
    //             console.log(fileEntry);

    //         }, onErrorCreateFile => {
    //             console.log("on error", onErrorCreateFile)
    //         }
    //         );

    //     }, onErrorLoadFs => {
    //             console.log("on error", onErrorLoadFs)
    //         });
    // }

    //submit
    sendingMail() {
        //  console.log("this.valueeeee",this.expenseArray);
        //     let arr=[];
        //         console.log("this.value.expnesetype",this.expenseArray.expenses);
        //         for(let i=0;i<this.expenses.length - 1;i++){
        //          let arr1= Object.keys(this.expenseArray.expenses[i]).map(key => this.expenseArray.expenses[i][key]);
        //          arr.push(arr1,"\n\t\t\t\t\t\t");
        //          console.log("this.arrr",arr);
        //         }
        //        this.expenseArray.expenses = arr;
        //     var blob = new Blob([this.csvarr], { type: "text/csv;charset=utf-8" });
        //     let obj=
        //      obj = Object.keys(this.user).map(key => this.user[key]);
        //     const submitData = obj;
        //     console.log("data...........",obj);
           
        //     blob = new Blob([blob, [submitData]], { type: "text/csv;charset=utf-8" });
        //     saveAs(blob, "otr.csv");

this.mService.sendingMail();
        this.router.navigate(['home/afterSendingMail']);
    }



    mailingZip() {
        console.log(".................")
        this.mService.sendingMail();
    }
}





