import { Component, OnInit } from '@angular/core';
declare var gtag;
declare var Plyr;

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
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$NONE');
    }
    openDrawer(projectId) {
        this.activeProjectId = projectId;
        this.drawerOpened = true;
    }

}
