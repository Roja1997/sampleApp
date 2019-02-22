/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
declare const navigator;


@Injectable()
export class cameraService {
imageURI;

 camera(){
     return new Promise((resolve,reject)=>{
         navigator.camera.getPicture((imageURI)=>{
             return resolve(imageURI)
         },
         (err)=>{
             return reject('failed');
         },{     quality: 100,
            destinationType: 1,
            sourceType: 1,
            encodingType: 0,
            mediaType: 0,
            saveToPhotoAlbum: true,
            cameraDirection: 0,
             correctOrientation: true,
             targetHeight:100,
             targetWidth:100
         });
     })
     
 }



}


