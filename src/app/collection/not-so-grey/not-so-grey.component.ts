import { Component, AfterViewInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-not-so-grey',
    templateUrl: './not-so-grey.component.html',
    styleUrls: ['./not-so-grey.component.scss']
})
export class NotSoGreyComponent implements AfterViewInit {

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
