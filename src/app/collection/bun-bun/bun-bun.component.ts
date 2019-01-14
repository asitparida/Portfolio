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
    showPrototypeCallout = false;
    poaperPrototypesFirstCarouselItems = [
        { text: 'Home landing page', img: 'assets/bun-bun/paper-iteration-1/IMG_1118.JPG' },
        { text: 'Item list page', img: 'assets/bun-bun/paper-iteration-1/IMG_1119.JPG' },
        { text: 'Details page for specific roll type', img: 'assets/bun-bun/paper-iteration-1/IMG_1120.JPG' },
        { text: 'Selecting a flavor and no. of units from the dropdown', img: 'assets/bun-bun/paper-iteration-1/IMG_1121.JPG' },
        { text: 'Details page with updated cart', img: 'assets/bun-bun/paper-iteration-1/IMG_1122.JPG' },
        { text: 'Cart popover showing currently added items', img: 'assets/bun-bun/paper-iteration-1/IMG_1123.JPG' },
        { text: 'Checkout process with address details', img: 'assets/bun-bun/paper-iteration-1/IMG_1124.JPG' },
        { text: 'Checkout process with payment details', img: 'assets/bun-bun/paper-iteration-1/IMG_1125.JPG' },
        { text: 'Checkout done - order confirmation modal', img: 'assets/bun-bun/paper-iteration-1/IMG_1126.JPG' },
    ];
    poaperPrototypesSecondCarouselItems = [
        { text: 'Home landing page', img: 'assets/bun-bun/paper-iteration-2/IMG_1130.JPG' },
        { text: 'Item list page', img: 'assets/bun-bun/paper-iteration-2/IMG_1131.JPG' },
        { text: 'Details page for specific roll type', img: 'assets/bun-bun/paper-iteration-2/IMG_1132.JPG' },
        { text: 'Selecting a flavor and no. of units from the dropdown', img: 'assets/bun-bun/paper-iteration-2/IMG_1133.JPG' },
        { text: 'Details page with updated cart', img: 'assets/bun-bun/paper-iteration-2/IMG_1134.JPG' },
        { text: 'Cart popover showing currently added items', img: 'assets/bun-bun/paper-iteration-2/IMG_1140.JPG' },
        { text: 'Checkout process with address details', img: 'assets/bun-bun/paper-iteration-2/IMG_1141.JPG' },
        { text: 'Checkout process with payment details', img: 'assets/bun-bun/paper-iteration-2/IMG_1142.JPG' },
        { text: 'Checkout done - order confirmation modal', img: 'assets/bun-bun/paper-iteration-2/IMG_1143.JPG' },
    ];
    showProtoTypeViewer = false;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$POMEGRANATE');
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.showPrototypeCallout = true;
        }, 2500);
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
