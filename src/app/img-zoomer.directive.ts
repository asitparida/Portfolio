import { Directive, Input, HostListener, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[imgZoomer]'
})
export class ImgZoomerDirective implements AfterViewInit {
    @Input() src = null;
    classAdded = false;
    spanNode = null;
    clickListener = null;

    constructor(private el: ElementRef) { }

    ngAfterViewInit() {
        this.spanNode = document.createElement('span');
        (this.spanNode as HTMLElement).classList.add('zoomed-in-bg');
        (this.el.nativeElement as HTMLElement).classList.add('cursor-zoom-in');
        ((this.el.nativeElement as HTMLElement).parentNode as any).append(this.spanNode);
    }
    @HostListener('click') onClick() {
        this.classAdded = !this.classAdded;
        if (this.classAdded) {
            (this.el.nativeElement as HTMLElement).classList.add('zoomed-in');
            setTimeout(() => {
                this.addDocClickListener();
            });
        } else {
            (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
            this.removeDocClickListener();
        }
    }
    addDocClickListener() {
        this.clickListener = (e) => {
            if (this.classAdded) {
                (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
                this.classAdded = false;
                this.removeDocClickListener();
            }
        };
        document.addEventListener('click', this.clickListener);
    }
    removeDocClickListener() {
        document.removeEventListener('click', this.clickListener);
        this.clickListener = null;
    }
    @HostListener('keyup.escape') onKeyUpEscape() {
        if (this.classAdded) {
            (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
            this.classAdded = false;
            this.removeDocClickListener();
        }
    }
    @HostListener('document:keyup.escape') onDocKeyUpEscape() {
        if (this.classAdded) {
            (this.el.nativeElement as HTMLElement).classList.remove('zoomed-in');
            this.classAdded = false;
            this.removeDocClickListener();
        }
    }

}
