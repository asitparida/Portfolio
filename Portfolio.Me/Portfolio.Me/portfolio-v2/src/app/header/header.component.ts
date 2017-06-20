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
    setTimeout(() => {
      const mainTimeline = new mojs.Timeline;
      let _ch = new Characters(1000);
      _ch.setWord('asit');
      mainTimeline.add(
        _ch
      ).play();
      document.addEventListener('visibilitychange', function _func() {
        if (!document.hidden && !mainTimeline._isCompleted) {
          mainTimeline.replay();
        }
        if (mainTimeline._isCompleted) {
          document.removeEventListener('visibilitychange', _func);
        }
      }, false);
    }, 100);

  }
}
