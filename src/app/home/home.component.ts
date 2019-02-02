import { Component, OnInit } from '@angular/core';
declare var gtag;
declare var Plyr;
declare var MobileDetect: any;

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
    showVideo = false;
    drawerOpened = false;
    activeProjectId = null;
    isMobile = false;
    constructor() {
        if (MobileDetect) {
            const md = new MobileDetect(window.navigator.userAgent);
            // tslint:disable-next-line:max-line-length
            const value = md.mobile() || md.phone() || md.tablet() || md.is('iPhone') || md.is('Android') || md.is('android');
            if (value) {
                this.isMobile = true;
            }
        }
    }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$NONE');
    }
    openDrawer(projectId) {
        this.activeProjectId = projectId;
        this.drawerOpened = true;
    }

}
