import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var gtag;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = 'app works!';
    COLORS: any = {
        RED: '#FD5061',
        YELLOW: '#FFCEA5',
        BLACK: '#29363B',
        WHITE: 'white',
        VINOUS: '#A50710'
    };
    currentTab = 0;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$NONE');
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

}
