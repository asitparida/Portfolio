import { Component, OnInit, AfterViewInit } from '@angular/core';

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
export class AppComponent implements OnInit, AfterViewInit {
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
    onComplete: function () {
      this.el.style.display = 'NONE';
    },
    onStart: function () {
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
    onComplete: function () {
      this.el.style.display = 'NONE';
    },
    onStart: function () {
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
    onComplete: function () {
      this.el.style.display = 'NONE';
    },
    onStart: function () {
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
    onComplete: function () {
      this.el.style.display = 'NONE';
    },
    onStart: function () {
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

  ngOnInit() {
    document.addEventListener('animate-remove-byscrollfx', (e: CustomEvent) => {
      const _details = e.detail;
      if (_details.el) {
        const _img: HTMLImageElement = _details.el.querySelector('img');
        if (_img) {
          _img.src = _img.getAttribute('data-tag-lazy');
        }
      }
    });
  }

  ngAfterViewInit() {
    let _tmpl =
      `
    <div class="dock-container hidden-on-xs pull-left">
      <div class="dock-theme-toggle">
        <label data-tag="chrome-toggle"><span data-tag="chrome-toggle-text">chrome Mode</span> <input id="chrome-toggle-switch" class="dock-theme-toggle-checkbox" type="checkbox" tabindex="0" /> <div class="dock-theme-toggle-bar"></div></label>
      </div>
    </div>
    <div class="dock-container pull-right">
      <a class="dock-item" target="_blank" href="https://1drv.ms/b/s!AOxIP7jZLLS4hpRN" aria-label="Asit Parida Resume" title="Resume">
        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
          stroke-linejoin="round" stroke-miterlimit="1.414">
          <g>
            <path d="M2.955 14.93l2.667-4.62H16l-2.667 4.62H2.955zm2.378-4.62l-2.666 4.62L0 10.31l5.19-8.99 2.666 4.62-2.523 4.37zm10.523-.25h-5.333l-5.19-8.99h5.334l5.19 8.99z"
            />
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="mailto:asitparida@live.in" aria-label="email me" title="Email">
        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
          stroke-linejoin="round" stroke-miterlimit="1.414">
          <g>
            <path d="M16 4.925v6.985c0 .154-.053.282-.158.384-.105.103-.234.154-.388.154H9.757v-4.64l1.066.82c.068.056.152.084.252.084s.186-.028.26-.085L16 4.925zM9.757 3.578h5.697c.142 0 .263.042.363.128.1.085.155.2.166.34L11.07 7.963 9.757 6.93V3.578zM8.937.576v14.848L0 13.88V2.163L8.938.576zm-2.7 7.454c-.013-.756-.208-1.382-.586-1.876-.37-.494-.85-.754-1.42-.777-.55.023-1.02.282-1.4.777-.38.494-.57 1.12-.58 1.876.01.745.21 1.364.59 1.86.38.494.85.755 1.4.784.57-.023 1.05-.283 1.43-.78.38-.498.58-1.12.59-1.864zm-2.08-1.655c.287.012.53.17.722.478.19.307.29.696.29 1.168 0 .48-.1.87-.29 1.18-.2.31-.44.47-.73.47s-.53-.15-.73-.46c-.2-.31-.29-.7-.29-1.17s.09-.86.29-1.16c.19-.3.43-.46.72-.48z"
              fill-rule="nonzero" />
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://in.linkedin.com/in/asparida" aria-label="linked in profile" title="LinkedIn">
        <svg width="19px" height="19px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"
          stroke-linejoin="round" stroke-miterlimit="1.414">
          <g>
            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
              fill-rule="nonzero" />
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://github.com/asitparida" aria-label="Git Hub profile" title="GitHub">
        <svg width="20px" height="20px" viewBox="0 0 48 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Github</title>
          <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Black" transform="translate(-700.000000, -560.000000)" fill="#000000">
              <path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                id="Github"></path>
            </g>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://www.facebook.com/asitparida" aria-label="facebook profile" title="Facebook">
        <svg width="18px" height="18px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Facebook</title>
          <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Black" transform="translate(-200.000000, -160.000000)" fill="#000000">
              <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                id="Facebook"></path>
            </g>
          </g>
        </svg>
      </a>
    </div>`;
    let _dock = document.querySelector('[data-tag-type="dock"]');
    if (_dock) {
      _dock.innerHTML = _tmpl;
      setTimeout(() => {
        let _ele: Element = document.getElementById('chrome-toggle-switch');
        _ele.addEventListener('change', (e: Event) => {
          let _checked: boolean = e.target['checked'] || false;
          if (_checked) {
            let _targetElms: NodeListOf<Element> = document.querySelectorAll('[data-tag="dark-mode-applicable"]');
            for (let i = 0; i < _targetElms.length; i++) {
              _targetElms[i].classList.add('dark');
            }
            if (_targetElms.length > 0) {
              let _textElm: Element = document.querySelector('[data-tag="chrome-toggle-text"]');
              if (_textElm) {
                _textElm.textContent = 'chrome mode on';
              }
            }
          } else {
            let _targetElms: NodeListOf<Element> = document.querySelectorAll('[data-tag="dark-mode-applicable"]');
            for (let i = 0; i < _targetElms.length; i++) {
              _targetElms[i].classList.remove('dark');
            }
            if (_targetElms.length > 0) {
              let _textElm: Element = document.querySelector('[data-tag="chrome-toggle-text"]');
              if (_textElm) {
                _textElm.textContent = 'chrome mode off';
              }
            }
          }
        }, true);
        _dock.classList.add('shown');
      }, 100);
    }
  }

}
