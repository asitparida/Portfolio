import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Characters } from './characters.component';

declare var mojs: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements AfterViewInit {
  title = 'app works!';
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    setTimeout(() => {
      const mainTimeline = new mojs.Timeline;
      let _ch = new Characters(1000);
      _ch.setWord('asit');
      mainTimeline.add(
        _ch
      ).play();
    }, 100);

  }
}
