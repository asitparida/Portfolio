import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-picture-carousel',
    templateUrl: './picture-carousel.component.html',
    styleUrls: ['./picture-carousel.component.scss']
})
export class PictureCarouselComponent implements OnInit {
    items = [
        'assets/veritas/IMG_1307_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1308_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1312_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1313_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1315_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1316_iphone8spacegrey_portrait.png',
        'assets/veritas/IMG_1317_iphone8spacegrey_portrait.png'
    ];
    pictureItems = [];
    marginRightAdjust = '-90px';
    previewHeight = '300px';
    previewWidth = '450px';
    activeSrc;
    activeIndex = 0;
    currentClass = '';
    carouselShown = false;
    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.pictureItems = [].concat(this.items).reverse()
        .map(x => `url(${x})`);
        this.activeSrc = this.items[this.activeIndex];
    }
    move(dir) {
        const direction = dir === -1 ? 'left' : 'right';
        this.currentClass = `hide-${direction}`;
        this.activeIndex = this.activeIndex + dir;
        this.activeIndex = this.activeIndex < 0 ? this.items.length - 1 : this.activeIndex;
        this.activeIndex = this.activeIndex > this.items.length - 1 ? 0 : this.activeIndex;
        setTimeout(() => {
            this.activeSrc = this.items[this.activeIndex];
            this.currentClass = `show-${direction}`;
            setTimeout(() => {
                this.currentClass = '';
            }, 300);
        }, 300);
    }

}