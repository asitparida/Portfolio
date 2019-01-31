import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-veritas',
    templateUrl: './veritas.component.html',
    styleUrls: ['./veritas.component.scss']
})
export class VeritasComponent implements AfterViewInit, OnInit, OnDestroy {
    isVideoPlayed = false;
    videoPlayer = null;
    isVideoPiped = false;
    showProtoTypeViewer = false;
    pictureCarouselItems = [
        { text: null, img: 'assets/veritas/IMG_1307_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1308_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1312_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1313_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1315_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1316_iphone8spacegrey_portrait.png' },
        { text: null, img: 'assets/veritas/IMG_1317_iphone8spacegrey_portrait.png' },
    ];
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$TURQUOISE');
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {

    }
    initializeVideo() {
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
        this.showProtoTypeViewer = true;
        setTimeout(() => {
            if (!this.videoPlayer) {
                this.initializeVideo();
            }
            setTimeout(() => {
                this.scrollTop();
                this.videoPlayer.play();
            }, 300);
        });
    }

}
