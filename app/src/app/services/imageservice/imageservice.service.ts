/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class imageserviceService {
    images = [
        {
            imgSrc: "images/favicon.png",
            imgName: "Singapore",

        },
        {
            imgSrc: "images/favicon.png",
            imgName: "South Africa",

        },
        {
            imgSrc: "images/favicon.png",
            imgName: "Malaysia",

        }]
    getImages() {
        return this.images;
    }
}
