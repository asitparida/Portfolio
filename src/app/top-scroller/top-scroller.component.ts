import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-top-scroller',
  templateUrl: './top-scroller.component.html',
  styleUrls: ['./top-scroller.component.scss']
})
export class TopScrollerComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    const element = this.elRef.nativeElement;
    if (element) {
      const scroller = (element as HTMLElement).querySelector('.arrow-holder');
      if (scroller && typeof window.scrollY !== 'undefined') {
        document.addEventListener('scroll', (e: any) => {
          if (window.scrollY > (window.innerHeight * 0.50)) {
            (scroller as HTMLElement).classList.remove('hide');
            if (!(scroller as HTMLElement).classList.contains('show')) {
              (scroller as HTMLElement).classList.add('show');
            }
          } else {
            (scroller as HTMLElement).classList.remove('show');
            if (!(scroller as HTMLElement).classList.contains('hide')) {
              (scroller as HTMLElement).classList.add('hide');
            }
          }
        });
      }
    }
  }
  scrollTop() {
    if (typeof window.scrollTo !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

}
