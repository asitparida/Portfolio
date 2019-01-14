import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var Plyr;

@Component({
    selector: 'app-transit-display',
    templateUrl: './transit-display.component.html',
    styleUrls: ['./transit-display.component.scss']
})
export class TransitDisplayComponent implements AfterViewInit, OnDestroy, OnInit {
    isVideoPlayed = false;
    videoPlayers = [];
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
    showProtoType = false;
    constructor(private santizer: DomSanitizer) { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$BELIZE_HOLE');
    }

    ngOnDestroy() {
    }

    ngAfterViewInit() {
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
                this.videoPlayers.push(videoPlayer);
            });
        }
    }
    scrollTop() {
        if (typeof window.scrollTo !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }
    watchVideo() {
        this.videoPlayers[1].stop();
        setTimeout(() => {
            this.scrollTop();
            this.videoPlayers[1].play();
        });
    }
    launchPrototype() {
        this.showProtoType = true;
    }
}
