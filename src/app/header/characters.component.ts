declare var mojs: {
    CustomShape: ObjectConstructor,
    addShape: any,
    easing: any;
    Burst: any,
    Timeline: any,
    Shape: any,
    ShapeSwirl: any
};

const COLORS_PRIMARY = {
    $EMERALD: '#2ecc71',
    $NEPHRITIS: '#27ae60',
    $TURQUOISE: '#1abc9c',
    $PETER_RIVER: '#3498db',
    $AMETHYST: '#9b59b6',
    $SUNFLOWER: '#f1c40f',
    $CARROT: '#e67e22',
    $ALIZARIN: '#e74c3c',
    $ORANGE: '#f39c12',
    $PUMPKIN: '#d35400',
    $POMEGRANATE: '#c0392b',
    $WISTERIA: '#8e44ad',
    $BELIZE_HOLE: '#2980b9',
    $PETER_RIVER_DARK: '#1d6ea4',
    $PETER_RIVER_LIGHT: '#99cbec'
};

export class Characters {
    delay = 0;
    character1: HTMLElement;
    character2: HTMLElement;
    character3: HTMLElement;
    character4: HTMLElement;
    timeline: any;
    constructor(_o: number) {
        if (_o) {
            this.delay = _o;
        }
        this._render();
    }
    _render() {
        const parent = document.getElementById('js-modal-hide-layer');

        class BubbleSpeech extends mojs.CustomShape {
            getShape() {
                // tslint:disable:max-line-length
                return '<defs><pattern id="image-path-svg" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512"><image x="-8" y="-24" width="520" height="520" xlink:href="assets/profile-pics/asit_2019.jpg"></image></pattern></defs><path fill="url(#image-path-svg)" class="bubble-path" d="M42,.19A40.71,40.71,0,0,1,47.19,0,38.43,38.43,0,0,1,53,.22a78.58,78.58,0,0,1,9.3,1.66c2.09.7,4,1.8,6.25,2.18a24.84,24.84,0,0,1,8.68,3.77,96.21,96.21,0,0,1,10.66,8.1,86.81,86.81,0,0,1,6,7.73,27.19,27.19,0,0,1,4.31,9.71c.47,2.5,1.36,4.94,1.47,7.51.25,3.82-1,7.49-1.59,11.22a35,35,0,0,1-2.6,7.37c-.71,1.73-2.09,3-3.19,4.53a10.72,10.72,0,0,1-3.38,2.81,47,47,0,0,1-4.53,2.64c-5.27,2.13-10.95,2.82-16.52,3.73a18,18,0,0,0-4.84,1c-.82.3-1.12,1.2-1.34,2a24.58,24.58,0,0,1-1.27,4.07,34.26,34.26,0,0,1-4.6,6.61,41.81,41.81,0,0,1-6.65,6.15,2.41,2.41,0,0,1-2.81.55c-.92-.56-1.86-1.88-1.12-2.92,1-1.44,2.36-2.56,3.1-4.15a14.12,14.12,0,0,0,1.19-8.77c-.42-1.41-1.13-3-2.6-3.59-2.49-.39-5,.23-7.49.19a68.53,68.53,0,0,1-8.86-.15,36.69,36.69,0,0,1-9-1.91,40.2,40.2,0,0,1-10.6-6,31.13,31.13,0,0,1-6.81-7.83C1.61,54.47-.16,49.95,0,45.28c0-1.36,0-2.73,0-4.09.45-5,2.54-9.63,4.53-14.17a40,40,0,0,1,5.07-8.34,34.06,34.06,0,0,1,6-6.51c2.29-1.88,4.39-4,7-5.52a40.55,40.55,0,0,1,8.48-4c2.14-.64,4.14-1.8,6.4-2C39,.56,40.51.38,42,.19Z"/>';
            }
        }

        mojs.addShape('bubble-speech', BubbleSpeech);

        const speech = new mojs.Shape({
            top: '50%', left: '50%',
            shape: 'bubble-speech',
            radius: 50,
            y: -110,
            scale: { 0: 1 },
            angle: { [-90]: 0 },
            duration: 550,
            easing: 'cubic.out',
            delay: this.delay + 700,
            fill: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            origin: '50% 100%',
            isForce3d: true,
            parent
        });


        class Underline extends mojs.CustomShape {
            // tslint:disable-next-line:max-line-length
            getShape() { return '<path class="undeline" d="M2.5,50.3296666 C3.31230785,50.3563224 4.33314197,51.7391553 5.26159075,51.244112 C6.0077473,50.8462659 7.06209448,50.3203773 7.71562592,50.3296666 C8.76504493,50.344583 10.5026522,50.7289147 10.5026522,50.7289147 C10.5026522,50.7289147 12.2264054,51.3540485 14.3045941,51.244112 C15.3644039,51.1880478 16.0579859,49.0942327 17.5373074,49.0205791 C18.3943409,48.9779084 19.7113596,50.7755195 20.6875422,50.7289147 C21.6556682,50.6826945 22.3001602,49.0692534 23.3699153,49.0205791 C24.1641633,48.9844405 26.4617126,51.2809265 27.3045404,51.244112 C28.6211722,51.1866018 29.868997,49.0779353 31.2843519,49.0205791 C32.5621635,48.9687968 34.5177647,50.7788661 35.8572938,50.7289147 C36.7433562,50.6958732 38.2335712,49.0522313 39.1401705,49.0205791 C39.9800278,48.9912571 40.561996,49.9055655 41.4152209,49.877823 C42.1696178,49.8532938 42.2680621,50.7519349 43.0298941,50.7289147 C43.9790327,50.7002347 44.036439,49.4065744 44.9921859,49.3806853 C45.4945214,49.3670781 46.5973018,48.5718404 47.1003097,48.559109 C48.1308079,48.5330267 48.971762,50.3516106 49.9999991,50.3296666 C50.8452183,50.3116285 50.5604619,49.1586632 51.3999478,49.1438038 C51.9113862,49.134751 53.4831103,48.5668789 53.9912876,48.559109 C54.882369,48.5454847 55.8282738,48.5684585 56.7056958,48.559109 C57.5279585,48.5503473 57.7153436,49.0252286 58.5216754,49.0205791 C59.2920272,49.016137 59.891015,48.0863678 60.6434283,48.0859881 C61.5658387,48.0855227 62.142412,49.0587083 63.0323087,49.0648534 C63.7314385,49.0696813 66.0372641,48.0767735 66.712955,48.0859881 C68.0228785,48.1038519 67.6682957,49.130074 68.8737479,49.1659145 C69.5874211,49.1871333 71.5986501,48.5310407 72.2696752,48.559109 C73.0379259,48.5912442 75.275178,49.892825 76.2284459,49.877823 C77.75882,49.8537388 76.8128295,49.1641707 78.6451998,49.0836451 C79.7893236,49.0333653 80.4770207,49.924725 81.6706526,49.877823 C83.0151778,49.8249918 82.7003946,49.0428007 84.0369748,49.0205791 C84.9618645,49.0052021 86.6077598,49.8672453 87.4984761,49.877823 C88.1326772,49.8853544 90.8057301,49.8531233 91.4118266,49.877823 C92.2804437,49.9132209 93.4120929,49.7988292 94.2005825,49.877823 C95.0771269,49.9656384 95.2679881,49.7233196 96.0110715,49.877823 C96.6642711,50.0136376 96.9762504,49.6806854 97.5,49.877823"></path>'; }
            getLength() { return 100; }
        }
        mojs.addShape('underline', Underline);

        const undeline = new mojs.Shape({
            shape: 'underline',
            top: '50%', left: '50%',
            fill: 'none',
            radius: 75,
            // radiusY:  20,
            y: 20,
            duration: 600,
            scaleX: { 2: 1 },
            // x: { 50 : 0 },
            origin: '0 50%',
            easing: 'cubic.out',
            // delay: this._o.delay + 275,
            delay: this.delay + 675,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            strokeWidth: 4,
            strokeLinecap: 'round',
            strokeDasharray: '100',
            strokeDashoffset: { '100': 0 },
            parent
        });

        const charOpts = {
            left: '50%', top: '50%',
            fill: 'none',
            radius: 23,
            delay: this.delay,
            isShowEnd: true,
            isForce3d: true,
            parent
        };

        const CHAR_STEP = 40;
        const SCALE_DOWN = .125;
        const SCALE_UP = 1;

        const Y_SHIFT = -20;
        // const Y_SHIFT = 0;
        const X_SHIFT = CHAR_STEP / 2;

        const FALLDOWN_OPTS = {
            scaleX: 1,
            scaleY: 1,
            y: Y_SHIFT,
            angle: 0,
            easing: 'bounce.out',
            duration: 1000,
        };

        const SHIFTX = 4 * CHAR_STEP;
        // tslint:disable-next-line:arrow-return-shorthand
        const not = (fn, base = 1) => { return (p) => { return base - fn(p); }; };
        const bounceCurve = mojs.easing.path('M0,-100 C0,-100 15.6877613,115.487686 32.0269814,74.203186 C62.0118605,-1.559962 100.057489,-0.0941416292 100.057489,-0.0941416292');
        const nBounceCurve = not(bounceCurve, 2);

        const elasticCurve = mojs.easing.path('M0,0 L42.4468,99.9990418 C46.3646102,-8.62551409 51.8137449,77.8031065 53.2538649,98.8047514 C54.3071019,114.164379 57.4212363,145.777285 62.4147182,98.8047479 C62.4147182,98.8047504 64.981755,73.166208 70.2635684,98.8047479 C73.8553743,114.6133 81.1660962,98.8047504 100,99.9990418');

        const elasticScale = mojs.easing.path('M1.77635684e-15,-0.000957489014 L42.4468,-0.000958179367 C46.3646102,-108.625514 51.8137449,-22.1968935 53.2538649,-1.19524857 C54.3071019,14.1643792 57.4212363,45.7772847 62.4147182,-1.19525215 C62.4147182,-1.19524958 64.981755,-26.833792 70.2635684,-1.19525215 C73.8553743,14.6132996 81.1660962,-1.19524958 100,-0.000958179367');
        const nElasticScale = not(elasticScale, 2);
        const char1 = new mojs.Shape({
            ...charOpts,
            y: { [Y_SHIFT]: -100 + Y_SHIFT },
            angle: { 0: -50 },
            x: -CHAR_STEP + X_SHIFT,
            scaleX: { 1: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            origin: '50% 100%',
            duration: 350,
        })
            .then({
                y: Y_SHIFT,
                angle: { to: -100, curve: elasticCurve },
                easing: 'bounce.out',
                duration: 850
            });
        this.character1 = document.createElement('div');
        this.character1.classList.add('character');
        char1.el.appendChild(this.character1);

        const char2 = new mojs.Shape({
            ...charOpts,
            y: { [Y_SHIFT]: -125 + Y_SHIFT },
            angle: { [-90]: -50 },
            x: X_SHIFT,
            scaleX: { .5: 1, curve: bounceCurve },
            scaleY: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            origin: '50% 100%',
            delay: charOpts.delay + 75,
            duration: 350,
        })
            .then({
                y: Y_SHIFT,
                angle: { to: 100, curve: elasticCurve },
                easing: 'bounce.out',
                duration: 950
            });
        this.character2 = document.createElement('div');
        this.character2.classList.add('character');
        char2.el.appendChild(this.character2);

        const char3 = new mojs.Shape({
            ...charOpts,
            y: { [Y_SHIFT]: -150 + Y_SHIFT },
            angle: { 0: -180, easing: 'cubic.in' },
            x: -2 * CHAR_STEP + X_SHIFT,
            scaleY: { 1: 1, curve: bounceCurve },
            scaleX: { 1: 1, curve: nBounceCurve },
            easing: 'quad.out',
            delay: charOpts.delay + 250,
            duration: 350,
        })
            .then({
                y: Y_SHIFT,
                angle: { to: -360, easing: 'expo.out' },
                easing: 'bounce.out',
                duration: 1000,
                origin: '50% 100%',
            });
        this.character3 = document.createElement('div');
        this.character3.classList.add('character');
        this.character3.classList.add('a');
        char3.el.appendChild(this.character3);
        const char4 = new mojs.Shape({
            ...charOpts,
            y: { [Y_SHIFT]: -125 + Y_SHIFT },
            angle: { 0: 180, easing: 'cubic.in' },
            x: CHAR_STEP + X_SHIFT,
            scaleY: { 1: 1, curve: nBounceCurve },
            scaleX: { 1: 1, curve: bounceCurve },
            easing: 'quad.out',
            delay: charOpts.delay + 500,
            duration: 300,
        })
            .then({
                y: Y_SHIFT,
                scaleX: { 1: 1, curve: elasticScale },
                scaleY: { 1: 1, curve: nElasticScale },
                angle: { to: 360, easing: 'expo.out' },
                easing: 'bounce.out',
                duration: 1000,
                // origin: '50% 100%',
            });
        this.character4 = document.createElement('div');
        this.character4.classList.add('character');
        char4.el.appendChild(this.character4);

        const burst1 = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 20,
            count: 2,
            angle: -90,
            parent,
            x: -150 + X_SHIFT,
            y: -100 + Y_SHIFT,
            radius: { 10: 100 },
            timeline: { delay: 900 },
            children: {
                shape: 'line',
                scale: { 1: 0 },
                radius: 'rand(8, 18)',
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 550,
                isForce3d: true
            }
        });
        burst1.el.classList.add('burst');

        const burst2 = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 20,
            count: 2,
            parent,
            // angle:   -90,
            x: CHAR_STEP + X_SHIFT,
            y: Y_SHIFT,
            radius: { 10: 100 },
            timeline: { delay: 2150 },
            children: {
                shape: 'line',
                scale: { 1: 0 },
                radius: 'rand(8, 18)',
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 550,
                isForce3d: true
            },
            onComplete() {
                this.generate().replay();
            }
        });
        burst2.el.classList.add('burst');

        const line = new mojs.Shape({
            shape: 'line',
            parent,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            radius: 40,
            radiusY: 0,
            x: -CHAR_STEP + X_SHIFT,
            y: 50 + Y_SHIFT,
            scaleX: { 0: 1 },
            strokeWidth: 4,
            left: '50%', top: '50%',
            delay: 1550,
            duration: 100,
            isTimelineLess: true,
            isShowEnd: false
        });

        line.el.style['z-index'] = 1;


        const line2 = new mojs.Shape({
            shape: 'line',
            parent,
            stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
            radius: 15,
            radiusY: 0,
            x: { [X_SHIFT]: CHAR_STEP + X_SHIFT },
            y: 50 + Y_SHIFT,
            scaleX: { 1: 0 },
            strokeWidth: 4,
            left: '50%', top: '50%',
            delay: 1550,
            duration: 400,
            isTimelineLess: true,
            isShowEnd: false
        });

        line2.el.style['z-index'] = 1;

        this.timeline = new mojs.Timeline({ speed: 1 });

        const speechBurst = new mojs.Burst({
            left: '50%', top: '50%',
            degree: 120,
            count: 5,
            parent: speech.el,
            angle: -60,
            x: 3,
            radius: { 55: 95 },
            timeline: { delay: 0 },
            children: {
                shape: 'line',
                scale: { 2: 0 },
                radius: 12,
                radiusY: 0,
                stroke: COLORS_PRIMARY.$PETER_RIVER_LIGHT,
                strokeWidth: 7,
                duration: 500,
                isForce3d: true
            },
            onComplete() {
                this.generate().replay();
            }
        });
        speechBurst.el.classList.add('burst');

        this.timeline
            .add(
                char1, char2, char3, char4,
                burst1, burst2,
                line, line2,
                speech, speechBurst,
                undeline
            );
        return this;
    }

    setWord(word = 'love') {
        const WORD = word.split('');
        this.character1.innerText = WORD[1];
        this.character2.innerText = WORD[2];
        this.character3.innerText = WORD[0];
        this.character4.innerText = WORD[3];
    }
}
