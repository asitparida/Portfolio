import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-transit-display',
    templateUrl: './transit-display.component.html',
    styleUrls: ['./transit-display.component.scss']
})
export class TransitDisplayComponent implements AfterViewInit, OnDestroy, OnInit {
    isVideoPlayed = false;
    videoPlayer = null;
    isVideoPiped = false;
    pictureCarouselItems = [
        // tslint:disable:max-line-length
        { text: 'Analyzing the personas from the POV of their goals, priorities and pain points', img: 'assets/transit-display/stakeholder-analysis/Picture1.png' },
        { text: 'Looking for pain points an data points with high priority for personas ', img: 'assets/transit-display/stakeholder-analysis/Picture2.png' },
        { text: 'Laying out the aspects of information which would be helpful to each of the three personas want to see on the display', img: 'assets/transit-display/stakeholder-analysis/Picture3.png' },
        { text: 'Information that is affected by weather from the POV of personas', img: 'assets/transit-display/stakeholder-analysis/Picture4.png' },
        { text: 'Looking for absolutely important information without which each of the three personas cant function', img: 'assets/transit-display/stakeholder-analysis/Picture5.png' },
    ];
    handDrawnSketchesCarouselItems = [
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide6.png' },
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide8.png' },
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide7.png' },
    ];
    digitalIteration2Items = [
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide6.png' },
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide8.png' },
        { text: null, img: 'assets/transit-display/hand-drawn-sketches/Slide7.png' },
    ];
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$BELIZE_HOLE');
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
