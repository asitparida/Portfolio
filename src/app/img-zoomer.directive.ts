import { Directive, Input, HostListener, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[imgZoomer]'
})
export class ImgZoomerDirective implements AfterViewInit {
    @Input() src = null;
    classAdded = false;
    spanNode = null;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.spanNode = document.createElement('span');
        (this.spanNode as HTMLElement).classList.add('zoomed-in-bg');
        (this.el.nativeElement as HTMLElement).parentNode.append(this.spanNode);
    }
    @HostListener('click') onClick() {
        this.classAdded = !this.classAdded;
        if (this.classAdded) {
            (this.el.nativeElement as HTMLElement).classList.add('zoomed-in');
        } else {
            (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
        }
    }
    @HostListener('keyup.escape') onKeyUpEscape() {
        if (this.classAdded) {
            (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
            this.classAdded = false;
        }
    }

}
