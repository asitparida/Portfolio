import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({ selector: '[deferLoad]' })
export class DeferLoadDirective implements AfterViewInit {
    element: HTMLImageElement;
    constructor(el: ElementRef) {
        this.element = el.nativeElement as HTMLImageElement;
    }

    ngAfterViewInit() {
        this.element.onload = () => {
            this.element.classList.add('show');
        };
    }
}
