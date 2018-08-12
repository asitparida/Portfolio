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

declare var gtag;

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

  currentTab = 0;
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

  activateTab(index) {
    if (this.currentTab !== index) {
      if (gtag) {
        gtag('event', 'open-navigation-detail', {
          'event_category': 'Navigation',
          'event_label': index === 1 ? 'About Me' : 'Projects'
        });
      }
      this.currentTab = index;
    }
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
      <a class="dock-item" target="_blank" href="https://1drv.ms/b/s!AuxIP7jZLLS4hp91c8TRcAyS9rCmyw" aria-label="Asit Parida Resume" title="Resume">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="22px" height="22px">
          <g>
            <g>
              <path d="M276.437,254.638c4.772-8.26,7.519-17.831,7.519-28.037c0-31.011-25.229-56.24-56.24-56.24    c-31.01,0-56.239,25.229-56.239,56.24c0,10.206,2.747,19.777,7.518,28.037c-18.694,5.448-32.397,22.726-32.397,43.156v73.727    h162.237v-73.727C308.835,277.365,295.131,260.087,276.437,254.638z M227.717,200.362c14.469,0,26.24,11.771,26.24,26.24    c0,14.468-11.771,26.239-26.24,26.239c-14.468,0-26.239-11.771-26.239-26.239C201.477,212.133,213.248,200.362,227.717,200.362z     M278.835,341.521H176.597v-43.727c0-8.245,6.708-14.953,14.953-14.953h72.331c8.245,0,14.953,6.708,14.953,14.953V341.521z" fill="#3498db"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M101.971,55.546H43.399V512h366.633v-55.55H468.6V0h-366.63V55.546z M73.399,482V85.546h306.633V482H73.399z M131.971,30    h306.63v396.45h-28.567V55.546H131.971V30z" fill="#3498db"/>
            </g>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="mailto:asitparida@live.in" aria-label="email me" title="Email">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="20px" height="20px">
          <g>
            <g>
              <path d="M511.609,197.601c-0.001-0.77-0.173-1.933-0.472-2.603c-0.787-2.854-2.536-5.461-5.154-7.281l-73.292-50.948V82.153    c0-7.24-5.872-13.112-13.112-13.112H335.26l-71.743-49.878c-4.484-3.121-10.437-3.134-14.935-0.026l-72.206,49.904H92.426    c-7.242,0-13.112,5.872-13.112,13.112v53.973L5.666,187.027c-3.623,2.504-5.583,6.507-5.645,10.6    C0.017,197.704,0,197.777,0,197.857l0.391,284.235c0.005,3.477,1.391,6.81,3.852,9.266c2.458,2.451,5.788,3.827,9.26,3.827    c0.007,0,0.012,0,0.018,0l485.385-0.667c7.24-0.01,13.104-5.889,13.094-13.13L511.609,197.601z M432.69,168.708l41.898,29.118    l-41.898,29.128V168.708z M256.015,45.884l33.31,23.156h-66.812L256.015,45.884z M105.538,95.265h300.928v149.921L305.43,315.428    l-41.194-31.954c-0.064-0.05-0.119-0.081-0.181-0.126c-4.604-3.454-11.116-3.581-15.894,0.126l-41.493,32.185l-101.13-69.893    V95.265z M79.314,168.003v59.64l-43.146-29.819L79.314,168.003z M26.258,222.867l158.669,109.655L26.578,455.346L26.258,222.867z     M51.875,468.909l204.324-158.484l203.591,157.923L51.875,468.909z M327.144,332.271l158.276-110.036l0.32,233.059    L327.144,332.271z" fill="#3498db"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M344.77,147.713H167.234c-7.24,0-13.112,5.872-13.112,13.112s5.872,13.112,13.112,13.112H344.77    c7.242,0,13.112-5.872,13.112-13.112S352.012,147.713,344.77,147.713z" fill="#3498db"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M344.77,215.895H167.234c-7.24,0-13.112,5.872-13.112,13.112c0,7.24,5.872,13.112,13.112,13.112H344.77    c7.242,0,13.112-5.872,13.112-13.112C357.882,221.767,352.012,215.895,344.77,215.895z" fill="#3498db"/>
            </g>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://api.whatsapp.com/send?phone=917893043880&text=Hi%20Asit%2C%20found%20your%20portfolio%20%3A)" title="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">
          <g>
            <path id="WhatsApp" d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z" fill="#3498db"/>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://www.linkedin.com/in/asitparida/" aria-label="linked in profile" title="LinkedIn">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve" width="20px" height="20px">
          <g>
            <rect x="89.016" y="189.906" width="67.506" height="203.096"/>
            <path d="M122.323,162.186h0.446c23.551,0,38.194-15.601,38.194-35.101c-0.442-19.928-14.643-35.087-37.752-35.087
       C100.107,91.998,85,107.157,85,127.085C85,146.585,99.678,162.186,122.323,162.186z"/>
            <path d="M261.4,393.002V279.576c0-6.086,0.464-12.119,2.24-16.459c4.887-12.149,15.978-24.693,34.641-24.693
       c24.439,0,34.195,18.629,34.195,45.92v108.657H400V276.535c0-62.379-33.307-91.398-77.744-91.398
       c-35.871,0-51.883,19.74-60.856,33.547v0.665h-0.442c0.118-0.219,0.306-0.442,0.442-0.665v-28.779h-67.537
       c0.905,19.053,0,203.096,0,203.096H261.4z"/>
            <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://github.com/asitparida" aria-label="Git Hub profile" title="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 55.11 55.11" style="enable-background:new 0 0 55.11 55.11;" xml:space="preserve" width="22px" height="22px">
          <g>
            <g>
              <path d="M18.549,29.909c-2.757,0-5,2.691-5,6s2.243,6,5,6s5-2.691,5-6S21.306,29.909,18.549,29.909z M18.549,39.909    c-1.654,0-3-1.794-3-4s1.346-4,3-4s3,1.794,3,4S20.204,39.909,18.549,39.909z" fill="#3498db"/>
              <path d="M37.549,29.909c-2.757,0-5,2.691-5,6s2.243,6,5,6s5-2.691,5-6S40.306,29.909,37.549,29.909z M37.549,39.909    c-1.654,0-3-1.794-3-4s1.346-4,3-4s3,1.794,3,4S39.204,39.909,37.549,39.909z" fill="#3498db"/>
              <path d="M39.075,24.909c-0.049,0-0.1,0-0.149,0.001c-0.926,0.016-1.853,0.054-2.78,0.091c-0.844,0.034-1.688,0.068-2.531,0.085    l-1.465,0.031c-2.543,0.053-5.178,0.107-7.751,0.097c-1.174-0.005-2.349-0.049-3.522-0.093c-1.598-0.06-3.248-0.124-4.886-0.083    c-2.273,0.055-4.185,0.781-5.685,2.159h0c-2.491,2.289-3.521,5.325-3.148,9.282c0.542,5.743,2.86,8.68,8.002,10.135    c4.323,1.223,8.665,1.333,12.322,1.281l1.218,0.006c0.411,0.003,0.822,0.007,1.233,0.007c0.507,0,1.014-0.005,1.521-0.021    c3.595-0.115,6.746-0.652,9.632-1.644c3.169-1.088,5.279-3.166,6.269-6.175c0.756-2.3,0.978-4.479,0.679-6.662    C47.547,29.856,44.45,24.909,39.075,24.909z M45.456,39.444c-0.795,2.417-2.437,4.022-5.019,4.908    c-2.695,0.925-5.654,1.428-9.046,1.536c-0.891,0.028-1.782,0.02-2.673,0.014l-1.249-0.007c-3.525,0.05-7.688-0.052-11.763-1.206    c-4.317-1.221-6.094-3.498-6.556-8.397C8.84,33,9.661,30.507,11.659,28.67c1.133-1.04,2.606-1.589,4.38-1.633    c1.576-0.036,3.196,0.023,4.762,0.082c1.196,0.045,2.393,0.09,3.589,0.095c2.608,0.012,5.247-0.044,7.802-0.098l1.463-0.03    c0.857-0.018,1.714-0.053,2.571-0.087c0.911-0.037,1.822-0.074,2.733-0.089c0.036-0.001,0.072-0.001,0.108-0.001    c4.13,0,6.607,4.022,6.984,6.771C46.31,35.554,46.114,37.44,45.456,39.444z" fill="#3498db"/>
              <path d="M51.866,18.56c-0.595-0.819-0.867-1.301-0.782-2.176c0.177-1.843-0.075-3.698-0.319-5.491l-0.016-0.118    c-0.326-2.404-0.954-4.698-1.867-6.819l-0.325-0.754L47.08,3.516c-2.051,0.431-4.173,0.877-6.107,1.994    c-1.284,0.742-2.562,1.533-3.797,2.297c-0.827,0.512-1.654,1.024-2.486,1.523c-0.045,0.027-0.135,0.049-0.16,0.049c0,0,0,0,0,0    C30.057,8.598,25.412,8.59,20.72,9.356c-0.058,0.01-0.247-0.022-0.397-0.111c-0.516-0.309-1.019-0.641-1.521-0.972    c-0.583-0.385-1.167-0.769-1.767-1.12c-2.862-1.68-6.024-3.301-9.753-3.777L6.552,3.282L6.163,4.125    C6.09,4.279,6.028,4.412,5.977,4.55c-1.07,2.884-1.715,5.908-1.924,9.085c-0.073,1.101-0.148,2.24,0.014,3.377    c0.054,0.377,0.009,0.453-0.138,0.637c-1.347,1.679-2.31,3.435-2.945,5.368c-1.067,3.246-1.26,6.845-0.609,11.324    c0.54,3.747,1.459,6.481,2.977,8.863c3.193,5.008,8.122,7.829,14.651,8.385c3.263,0.278,6.574,0.32,9.82,0.32    c0.698,0,1.393-0.002,2.084-0.004c0.911-0.003,1.823-0.005,2.732-0.003c4.18,0.002,7.514-0.542,10.545-1.729    c5.396-2.111,8.984-6.043,10.663-11.688c0.936-3.145,1.355-6.489,1.245-9.941C54.97,24.698,53.884,21.339,51.866,18.56z     M51.931,37.915c-1.516,5.093-4.615,8.494-9.475,10.396c-2.79,1.093-5.87,1.61-9.812,1.591c-0.913-0.002-1.827,0-2.741,0.003    c-3.861,0.011-7.853,0.022-11.729-0.309c-5.958-0.507-10.255-2.95-13.135-7.467c-1.359-2.131-2.187-4.621-2.685-8.075    c-0.614-4.22-0.45-7.431,0.53-10.413c0.559-1.701,1.411-3.252,2.605-4.742c0.523-0.652,0.684-1.281,0.557-2.17    c-0.133-0.931-0.064-1.964,0.008-3.061c0.184-2.807,0.761-5.565,1.714-8.197c3.065,0.542,5.773,1.949,8.253,3.405    c0.57,0.334,1.124,0.7,1.677,1.064c0.527,0.348,1.055,0.695,1.597,1.019c0.54,0.322,1.192,0.46,1.747,0.368    c4.468-0.729,8.89-0.723,13.146,0.021c0.49,0.083,1.075-0.033,1.528-0.304c0.841-0.505,1.675-1.021,2.51-1.538    c1.242-0.769,2.483-1.537,3.746-2.266c1.619-0.935,3.446-1.332,5.381-1.74c0.675,1.74,1.149,3.601,1.413,5.541l0.016,0.118    c0.228,1.681,0.464,3.419,0.309,5.03c-0.154,1.594,0.459,2.586,1.155,3.544c1.803,2.483,2.734,5.386,2.846,8.872    C53.197,31.845,52.806,34.977,51.931,37.915z" fill="#3498db"/>
            </g>
          </g>
        </svg>
      </a>
      <a class="dock-item" target="_blank" href="https://www.facebook.com/asitparida" aria-label="facebook profile" title="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve" width="20px" height="20px">
          <g>
            <path d="M200.767,400h65.266V242.413h43.798c0,0,4.104-25.428,6.103-53.235h-49.647v-36.264c0-5.416,7.109-12.696,14.153-12.696   h35.564V85h-48.366c-68.478,0-66.872,53.082-66.872,61.009v43.356h-31.771v53.029h31.771V400z" fill="#3498db"/>
            <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z" fill="#3498db"/>
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
    document.addEventListener('load', (e: Event) => {
      const elm = e.target as HTMLElement;
      if (elm.tagName === 'IMG') {
        if (elm.hasAttribute('data-lazy-load')) {
          if (elm.getAttribute('data-lazy-load') === 'true') {
            elm.classList.add('show');
          }
        }
      }
    }, true);
  }

}
