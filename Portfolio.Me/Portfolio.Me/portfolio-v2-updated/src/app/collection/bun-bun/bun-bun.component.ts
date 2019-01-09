import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-bun-bun',
    templateUrl: './bun-bun.component.html',
    styleUrls: ['./bun-bun.component.scss']
})
export class BunBunComponent implements AfterViewInit, OnDestroy, OnInit {
    isVideoPlayed = false;
    videoPlayer = null;
    isVideoPiped = false;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$TURQUOISE');
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        this.videoPlayer = new Plyr('#player', {
            loop: { active: true }
        });
        this.videoPlayer.toggleControls(false);
        this.videoPlayer.on('canplay', event => {
            const instance = event.detail.plyr;
            this.videoPlayer.play();
            this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('playing', event => {
            this.isVideoPlayed = true;
        });
        this.videoPlayer.on('pause', event => {
            this.isVideoPlayed = false;
        });
    }
    scrollTop() {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }
    watchVideo() {
        this.videoPlayer.stop();
        setTimeout(() => {
            this.scrollTop();
            this.videoPlayer.play();
        });
    }
}
