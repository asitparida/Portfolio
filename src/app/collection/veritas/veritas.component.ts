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
    // tslint:disable:max-line-length
    animationCarouselItems = [
        { title: 'Start Button', text: 'The button wobbles to capture attention and provide a call-to-action.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Start+Button.mp4' },
        { title: 'Prpgress Bar', text: 'The slider fills smoothly to show an indefinite loader.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Prograss+Bar.mp4' },
        { title: 'Messages', text: 'The message slides-in to direct the user\'s  attention to it.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Message+Animation+In.mp4' },
        { title: 'Action Menus', text: 'The panel slides into and out of view to maintain continuity and provide point of entry.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Feed+Interaction+-+2.mp4' },
        { title: 'Worble Edit Menu', text: 'The elements wobble to capture attention with the name field highlighted.', video: 'https://s3.us-east-2.amazonaws.com/asitparida-portfolio/veritas/animations/Egg+Interaction+-+2.mp4' }
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
