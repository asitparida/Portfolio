import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var gtag;
declare var Plyr;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
    title = 'app works!';
    COLORS: any = {
        RED: '#FD5061',
        YELLOW: '#FFCEA5',
        BLACK: '#29363B',
        WHITE: 'white',
        VINOUS: '#A50710'
    };
    currentTab = 0;
    videoPlayerId = 'video' + Math.floor(Math.random() * 10e8);
    videoPlayer = null;
    isVideoPlayed = false;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$NONE');
    }
    ngAfterViewInit() {
        // this.videoPlayer = new Plyr(`#${this.videoPlayerId}`, {
        //     loop: { active: true }
        // });
        // this.videoPlayer.toggleControls(false);
        // this.videoPlayer.on('canplay', event => {
        //     const instance = event.detail.plyr;
        //     this.videoPlayer.play();
        //     this.videoPlayer.toggleControls(true);
        // });
        // this.videoPlayer.on('playing', event => {
        //     this.isVideoPlayed = true;
        // });
        // this.videoPlayer.on('pause', event => {
        //     this.isVideoPlayed = false;
        // });
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
