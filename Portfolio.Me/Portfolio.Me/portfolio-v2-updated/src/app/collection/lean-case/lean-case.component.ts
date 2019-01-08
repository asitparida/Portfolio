import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var Plyr;

@Component({
    selector: 'app-lean-case',
    templateUrl: './lean-case.component.html',
    styleUrls: ['./lean-case.component.scss']
})
export class LeanCaseComponent implements AfterViewInit {

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
