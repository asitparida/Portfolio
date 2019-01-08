import { Component, AfterViewInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-transit-display',
    templateUrl: './transit-display.component.html',
    styleUrls: ['./transit-display.component.scss']
})
export class TransitDisplayComponent implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        const player = new Plyr('#player', {
            loop: { active: true }
        });
        player.on('canplay', event => {
            const instance = event.detail.plyr;
            player.play();
        });
    }

}
