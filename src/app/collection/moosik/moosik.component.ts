import { Component, AfterViewInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-moosik',
    templateUrl: './moosik.component.html',
    styleUrls: ['./moosik.component.scss']
})
export class MoosikComponent implements AfterViewInit {

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
