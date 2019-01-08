import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[deferLoad]' })
export class DeferLoadDirective implements AfterViewInit {
    element: HTMLImageElement;
    constructor(el: ElementRef) {
        this.element = el.nativeElement as HTMLImageElement;
    }

    ngAfterViewInit() {
        this.element.onload = () => {
            if (window.innerWidth > 768) {
                this.element.classList.add('show');
            }
        };
    }
}
