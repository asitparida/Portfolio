import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-bun-bun',
    templateUrl: './bun-bun.component.html',
    styleUrls: ['./bun-bun.component.scss']
})
export class BunBunComponent implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        const player = new Plyr('#player', {
            /* options */
            autoplay: true,
            loop: { active: true }
        });
        player.on('ready', event => {
            const instance = event.detail.plyr;
            console.log('ready');
            player.play();
        });
    }

}
