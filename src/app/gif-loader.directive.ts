import { Directive, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[gifLoader]'
})
export class GifLoaderDirective implements AfterViewInit {
    gifHidden = true;
    imageElem = null;
    gifImageElem = null;
    nonGifImageElem = null;
    topThreshold = 200;
    bottomThreshold = window.innerHeight * 0.33;
    constructor(private elRef: ElementRef) { }
    ngAfterViewInit() {
        if (this.elRef) {
            this.imageElem = this.elRef.nativeElement;
            if (this.imageElem) {
                const gifElem = (this.imageElem as HTMLElement).querySelector('[data-img="gif"]');
                if (gifElem) {
                    this.gifImageElem = gifElem;
                }
                const nonGifElem = (this.imageElem as HTMLElement).querySelector('[data-img="non-gif"]');
                if (nonGifElem) {
                    this.nonGifImageElem = nonGifElem;
                }
                this.onWindowScroll();
            }
        }
    }
    @HostListener('window:scroll')
    onWindowScroll() {
        if (this.imageElem) {
            const props = (this.imageElem as HTMLElement).getBoundingClientRect();
            if (props) {
                const imageMid = props.top + (props.height / 2);
                const windowMid = window.innerHeight / 2;
                if (this.nonGifImageElem && this.gifImageElem) {
                    if (imageMid > (windowMid - this.topThreshold) && imageMid < (windowMid + this.bottomThreshold)) {
                        (this.nonGifImageElem as HTMLElement).classList.add('hidden');
                        (this.gifImageElem as HTMLElement).classList.remove('hidden');
                        this.gifHidden = false;
                    } else {
                        (this.nonGifImageElem as HTMLElement).classList.remove('hidden');
                        (this.gifImageElem as HTMLElement).classList.add('hidden');
                        this.gifHidden = true;
                    }
                }
            }
        }
    }
    @HostListener('mouseover')
    onMouseover() {
        if (this.gifHidden) {
            if (this.nonGifImageElem && this.gifImageElem) {
                (this.nonGifImageElem as HTMLElement).classList.add('hidden');
                    (this.gifImageElem as HTMLElement).classList.remove('hidden');
                    this.gifHidden = false;
            }
        }
    }
    @HostListener('mouseleave')
    onMouseleave() {
        if (!this.gifHidden) {
            if (this.nonGifImageElem && this.gifImageElem) {
                (this.nonGifImageElem as HTMLElement).classList.remove('hidden');
                    (this.gifImageElem as HTMLElement).classList.add('hidden');
                    this.gifHidden = true;
            }
        }
        this.onWindowScroll();
    }


}
