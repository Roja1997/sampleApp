/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class imageserviceService {
    images = [
        {
            imgSrc: "images/Singapore.png",
            imgName: "Singapore",

        },
        {
            imgSrc: "images/SouthAfrica.png",
            imgName: "South Africa",

        },
        {
            imgSrc: "images/Malaysia.png",
            imgName: "Malaysia",

        },{
            imgSrc: "images/India.png",
            imgName: "India",
        }]
    getImages() {
        return this.images;
    }
}
