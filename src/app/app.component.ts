import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var gtag;
const ADD_DOCK = false;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'app works!';
    COLORS: any = {
        RED: '#FD5061',
        YELLOW: '#FFCEA5',
        BLACK: '#29363B',
        WHITE: 'white',
        VINOUS: '#A50710'
    };

    currentTab = 0;
    constructor() {
        const self = this;
    }

    activateTab(index) {
        if (this.currentTab !== index) {
            if (gtag) {
                gtag('event', 'open-navigation-detail', {
                    'event_category': 'Navigation',
                    'event_label': index === 1 ? 'About Me' : 'Projects'
                });
            }
            this.currentTab = index;
        }
    }

    ngOnInit() {
        document.addEventListener('animate-remove-byscrollfx', (e: CustomEvent) => {
            const _details = e.detail;
            if (_details.el) {
                const _img: HTMLImageElement = _details.el.querySelector('img');
                if (_img) {
                    _img.src = _img.getAttribute('data-tag-lazy');
                }
            }
        });
        document.addEventListener('load', (e: Event) => {
            const elm = e.target as HTMLElement;
            if (elm.tagName === 'IMG') {
                if (elm.hasAttribute('data-lazy-load')) {
                    if (elm.getAttribute('data-lazy-load') === 'true') {
                        (elm as HTMLImageElement).onload = function() {
                            elm.classList.add('show');
                        };
                    }
                }
            }
        }, true);
    }

    // tslint:disable max-line-length
    ngAfterViewInit() {
    }
}
