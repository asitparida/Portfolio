import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Characters } from './characters.component';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Element } from '@angular/compiler';

declare var mojs: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements AfterViewInit, OnInit {
  title = 'app works!';
  showLightHeader: Boolean = false;
  picId = 'pic' + Math.floor(Math.random() * 1000);
  ngOnInit() {
    if (window.innerWidth < 768) {
      this.showLightHeader = true;
    } else {
      this.showLightHeader = false;
    }
  }
  ngAfterViewInit() {
    if (!this.showLightHeader) {
      setTimeout(() => {
        const mainTimeline = new mojs.Timeline;
        const _ch = new Characters(1000);
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
}
