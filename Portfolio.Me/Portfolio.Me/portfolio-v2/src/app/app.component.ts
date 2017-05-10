import { Component } from '@angular/core';

declare var mojs: {
  CustomShape: ObjectConstructor, //here usage
  addShape: any,
  easing: any;
  Burst: any,
  Timeline: any,
  Shape: any,
  ShapeSwirl: any
};

const CIRCLE_OPTS = {
  left: 0, top: 0,
  scale: { 0: 1 },
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  COLORS: any = {
    RED: '#FD5061',
    YELLOW: '#FFCEA5',
    BLACK: '#29363B',
    WHITE: 'white',
    VINOUS: '#A50710'
  }

  burst1 = new mojs.Burst({
    left: 0, top: 0,
    count: 8,
    radius: { 50: 150 },
    children: {
      shape: 'line',
      stroke: ['white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202'],
      scale: 1,
      scaleX: { 1: 0 },
      // pathScale:    'rand(.5, 1.25)',
      degreeShift: 'rand(-90, 90)',
      radius: 'rand(20, 40)',
      // duration:     200,
      delay: 'rand(0, 150)',
      isForce3d: true
    },
    onComplete: function(){
      this.el.style.display = 'NONE';
    },
    onStart: function(){
      this.el.style.display = 'BLOCK';
    }
  });

  largeBurst: any = new mojs.Burst({
    left: 0, top: 0,
    count: 4,
    angle: 45,
    radius: { 0: 450 },
    children: {
      shape: 'line',
      stroke: '#4ACAD9',
      scale: 1,
      scaleX: { 1: 0 },
      radius: 100,
      duration: 450,
      isForce3d: true,
      easing: 'cubic.inout'
    },
    onComplete: function(){
      this.el.style.display = 'NONE';
    },
    onStart: function(){
      this.el.style.display = 'BLOCK';
    }
  });

  largeCircle: any = new mojs.Shape({
    left: CIRCLE_OPTS.left,
    top: CIRCLE_OPTS.top,
    scale: CIRCLE_OPTS.scale,
    fill: 'none',
    stroke: 'white',
    strokeWidth: 4,
    opacity: { .25: 0 },
    radius: 250,
    duration: 600,
    onComplete: function(){
      this.el.style.display = 'NONE';
    },
    onStart: function(){
      this.el.style.display = 'BLOCK';
    }
  });

  smallCircle: any = new mojs.Shape({
    left: CIRCLE_OPTS.left,
    top: CIRCLE_OPTS.top,
    scale: CIRCLE_OPTS.scale,
    fill: 'white',
    opacity: { .5: 0 },
    radius: 30,
    onComplete: function(){
      this.el.style.display = 'NONE';
    },
    onStart: function(){
      this.el.style.display = 'BLOCK';
    }
  });

  constructor() {
    let self = this;
    self.burst1.el.style.zIndex = 999;
    self.largeBurst.el.style.zIndex = 999;
    self.largeCircle.el.style.zIndex = 999;
    self.smallCircle.el.style.zIndex = 999;
    document.addEventListener('click', function (e) {

      self.burst1
        .tune({ x: e.pageX, y: e.pageY })
        .generate()
        .replay();

      self.largeBurst
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

      self.largeCircle
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

      self.smallCircle
        .tune({ x: e.pageX, y: e.pageY })
        .replay();

    });
  }


}
