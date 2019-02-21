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



declare const cordova: any;
declare const window: any;
declare const LocalFileSystem: any;


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


    expenses: any = [];
    expenseArray;
    user;
    values;
    
    imagePath;
    

    

    constructor(private route: ActivatedRoute, public pubsub: NPubSubService,
        private bdms: NDataModelService, private router: Router,
        private mService: mailService,private otrInfo: otrdetailService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
    
           this.expenseArray = JSON.parse(localStorage.getItem(JSON.stringify(this.otrInfo.country)));
           this.user=JSON.parse(localStorage.getItem("profile"));
           console.log("user data",this.user);
       
        console.log('get value', this.expenseArray);
      this.expenses = this.expenseArray[0].expenseList;
      this.imagePath=this.expenseArray[0].imageurl;
      console.log(" ",this.expenses);
      console.log("image path ",  this.imagePath);
    

      
       console.log('expense array....',this.expenses);
    }
  

    addExpense() {
        this.router.navigate(['home/expenseinfo']);
    }
    a: any = {};
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
        //  console.log("this.valueeeee", this.value);
        //     let arr=[];
        //         console.log("this.value.expnesetype",this.value.expenses);
        //         for(let i=0;i<this.value.expenses.length;i++){
        //          let arr1= Object.keys(this.value.expenses[i]).map(key => this.value.expenses[i][key]);
        //          arr.push(arr1,"\n\t\t\t\t\t\t");
        //          console.log("this.arrr",arr);
        //         }
        //         this.value.expenses = arr;
        //     var blob = new Blob([this.csvarr], { type: "text/csv;charset=utf-8" });
        //     let obj = Object.keys(this.value).map(key => this.value[key]);
        //     const submitData = obj;
        //     console.log("data...........",obj);
        //     console.log("this.a:",this.a);
        //     blob = new Blob([blob, [submitData]], { type: "text/csv;charset=utf-8" });
        //     saveAs(blob, "otr.csv");


        this.router.navigate(['home/afterSendingMail']);
    }




    // createCSVandSendEmail() {
    //     console.log("this.valueeeee", this.value);
    //     let arr=[];
    //         console.log("this.value.expnesetype",this.value.expense);
    //         for(let i=0;i<this.value.expense.length;i++){
    //          let arr1= Object.keys(this.value.expenses[i]).map(key => this.value.expense[i][key]);
    //          arr.push(arr1,"\n\t\t\t\t\t\t\t\t");
    //          console.log("this.arrr",arr);
    //         }
    //         this.value.expense = arr;
    //     var blob = new Blob([this.csvarr], { type: "text/csv;charset=utf-8" });
    //     let obj = Object.keys(this.value).map(key => this.value[key]);
    //     const submitData = obj;
    //     console.log("data...........",obj);
    //     console.log("this.a:",this.a);
    //     blob = new Blob([blob, [submitData]], { type: "text/csv;charset=utf-8" });
    //     saveAs(blob, "otr.csv");
    // }
    mailingZip() {
        console.log(".................")
        this.mService.sendingMail();
    }
}





