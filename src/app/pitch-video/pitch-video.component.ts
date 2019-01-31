import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-pitch-video',
    templateUrl: './pitch-video.component.html',
    styleUrls: ['./pitch-video.component.scss']
})
export class PitchVideoComponent implements OnInit, AfterViewInit {
    playerId = `player_${Math.floor(Math.random() * 10e8)}`;
    videoPlayer;
    isVideoPlayed = false;
    isVideoPlayedPiped = false;
    @ViewChild('playerHolder') playerHolder: ElementRef;
    @Input() showVideo = false;
    @Output() showVideoChange = new EventEmitter<boolean>();
    constructor(private elRef: ElementRef) { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        (this.playerHolder.nativeElement as HTMLElement).focus();
        setTimeout(() => {
            const videoElm = document.getElementById(this.playerId);
            if (window.innerHeight < window.innerWidth) {
                let width = window.innerWidth - 120;
                let height = (width * (9 / 16));
                if (height > (window.innerHeight - 120)) {
                    height = window.innerHeight - 120;
                    width = (height * (16 / 9));
                }
                (videoElm as HTMLVideoElement).style.width = width + 'px';
                (videoElm as HTMLVideoElement).style.height = height + 'px';
            }
            setTimeout(() => {
                this.initializeVideo();
            }, 100);
        }, 1);
    }
    initializeVideo() {
        this.videoPlayer = new Plyr(`#${this.playerId}`, {
            loop: { active: true },
            controls: [
                'play-large', // The large play button in the center
                'restart', // Restart playback
                'rewind', // Rewind by the seek time (default 10 seconds)
                'play', // Play/pause playback
                'fast-forward', // Fast forward by the seek time (default 10 seconds)
                'progress', // The progress bar and scrubber for playback and buffering
                'current-time', // The current time of playback
                'duration', // The full duration of the media
                'mute', // Toggle mute
                'volume', // Volume control
                'settings', // Settings menu
                // 'fullscreen', // Toggle fullscreen
            ]
        });
        this.videoPlayer.pip = false;
        this.videoPlayer.toggleControls(false);
        this.videoPlayer.on('canplay', event => {
            // const instance = event.detail.plyr;
            this.videoPlayer.play();
            this.videoPlayer.toggleControls(true);
        });
        this.videoPlayer.on('playing', event => {
            this.isVideoPlayed = true;
        });
        this.videoPlayer.on('pause', event => {
            this.isVideoPlayed = false;
        });
        this.videoPlayer.on('enterpictureinpicture', event => {
            console.log('hello');
        });
    }
    closeVideo() {
        this.videoPlayer.stop();
        setTimeout(() => {
            this.videoPlayer.destroy();
            setTimeout(() => {
                this.showVideo = false;
                this.showVideoChange.emit(this.showVideo);
            });
        });
    }

}
