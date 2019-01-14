import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var Plyr: any;

@Component({
    selector: 'app-idiff',
    templateUrl: './idiff.component.html',
    styleUrls: ['./idiff.component.scss']
})
export class IdiffComponent implements AfterViewInit, OnDestroy, OnInit {
    isVideoPlayed = false;
    videoPlayer = null;
    isVideoPiped = false;
    pictureCarouselItems = [
        { text: null, img: 'assets/idiff/Picture1.png' },
        { text: null, img: 'assets/idiff/Picture2.png' },
        { text: null, img: 'assets/idiff/Picture3.png' },
    ];
    showPrototypeCallout = false;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$WISTERIA');
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.showPrototypeCallout = true;
        }, 2500);
        const players = document.querySelectorAll('.plyr-player') as any;
        if (players && players.length > 0) {
            (players as Array<any>).forEach(p => {
                const videoPlayer = new Plyr(p, {
                    loop: { active: true }
                });
                videoPlayer.toggleControls(false);
                videoPlayer.on('canplay', event => {
                    videoPlayer.play();
                    videoPlayer.toggleControls(true);
                });
            });
        }
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
