import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-picture-carousel',
    templateUrl: './picture-carousel.component.html',
    styleUrls: ['./picture-carousel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PictureCarouselComponent implements OnInit, AfterViewInit {
    @Input() items = [
        { text: null, img: 'assets/veritas/IMG_1307_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1308_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1312_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1313_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1315_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1316_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1317_iphone8spacegrey_portrait.png' },
    ];
    pictureItems = [];
    marginRightAdjust = '-90px';
    previewHeight = '300px';
    previewWidth = '450px';
    activeItem;
    activeIndex = 0;
    currentClass = '';
    carouselShown = false;
    @Input() listWrapperClass = '';
    @Input() carouselWrapperClass = '';
    @Input() inplaceCarouselWrapperClass = '';
    @Input() bottomStagger = false;
    @Input() embeddedCarousel = false;
    @Input() staggerStep = 15;
    constructor(
        private sanitizer: DomSanitizer,
        private elRef: ElementRef) { }

    ngOnInit() {
        this.pictureItems = [].concat(this.items).reverse()
        .map(x => Object.assign({}, x, {
            img: `url(${x.img})`
        }));
        this.activeItem = this.items[this.activeIndex];
    }
    ngAfterViewInit() {
        if (window.innerWidth <= 768) {
            this.embeddedCarousel = true;
        }
        if (this.embeddedCarousel) {
            const elem = this.elRef.nativeElement;
            if (elem) {
                (elem as HTMLElement).style.width = '100%';
            }
        }
    }
    showCarousel() {
        this.carouselShown = true;
        setTimeout(() => {
            const elem = this.elRef.nativeElement;
            if (elem) {
                const targetElm = (elem as HTMLElement).querySelector('.picture-carousel-wrapper');
                if (targetElm) {
                    (targetElm as HTMLElement).focus();
                }
            }
        });
    }
    move(dir) {
        const direction = dir === -1 ? 'left' : 'right';
        this.currentClass = `hide-${direction}`;
        this.activeIndex = this.activeIndex + dir;
        this.activeIndex = this.activeIndex < 0 ? this.items.length - 1 : this.activeIndex;
        this.activeIndex = this.activeIndex > this.items.length - 1 ? 0 : this.activeIndex;
        setTimeout(() => {
            this.activeItem = this.items[this.activeIndex];
            this.currentClass = `show-${direction}`;
            setTimeout(() => {
                this.currentClass = '';
            }, 300);
        }, 300);
    }

}
