import {
    Component,
    AfterViewInit,
    ViewEncapsulation,
    HostListener
} from '@angular/core';
import { Projects as PROJECTS_ARRAY } from './projects.definitions';
import * as _ from 'underscore';
import { Element } from '@angular/compiler';

function getStyle(el, styleProp) {
    if (el.currentStyle) {
        return el.currentStyle[styleProp];
    }
    return document.defaultView.getComputedStyle(el, null)[styleProp];
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const COLORS = {
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
    $BELIZE_HOLE: '#2980b9'
}

class Project {
    id: string;
    name: string;
    description: string;
    githubSrc: string;
    publishSrc: string;
    imgSrc: string;
    size: string;
    landscapeSize: string;
    hoverbg: string;
    width: string;
    height: string;
    bgColor: string;
    content: string;
    darker: boolean = false;
    isNew: boolean = false;
    constructor() {
        this.size = 'single';
        this.width = '100%';
        this.height = 'auto';
        this.bgColor = '#fff';
    }
}

declare var GridScrollFx: any;
let projectDrawerOpened = false;

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements AfterViewInit {
    projects: any[] = [];
    currentWindowSize = null;
    drawerId = 'drawer' + Math.floor(Math.random() * 100);
    constructor() {
        let self = this;
        _.each(PROJECTS_ARRAY, (_item: any, _iter: number) => {
            let _project = new Project();
            _project.id = 'pro_' + _iter;
            _project.name = _item.name;
            _project.description = _item.description;
            _project.githubSrc = _item.git;
            _project.publishSrc = _item.href;
            _project.imgSrc = _item.img;
            _project.content = _item.content;
            _project.darker = _item.darker || false;
            _project.isNew = _item.isNew || false;
            if (_item.size != null)
                _project.landscapeSize = _item.size;
            if (_item.width != null)
                _project.width = _item.width;
            if (_item.height != null)
                _project.height = _item.height;
            if (_item.bgColor != null)
                _project.bgColor = _item.bgColor;
            self.projects.push(_project);
        });
    }
    ngAfterViewInit() {
        this.initializeMasonry();
    }

    reload() {
        window.location.reload();
    }
    @HostListener('window:resize', ['$event'])
    initializeMasonry() {
        if (window.innerWidth > 768) {
            if (this.currentWindowSize === null || this.currentWindowSize === 1) {
                const gridElm: HTMLElement = document.getElementById('grid');
                const gridMasonry = new GridScrollFx(gridElm, {
                    viewportFactor: 0.20
                }, () => {
                    this.hightlightGridLayoutAdjuster();
                    // this.showTimeline();
                });
                setTimeout(this.hightlightGridLayoutAdjuster);
                this.currentWindowSize = 1;
            } else {
                this.reload();
            }
        } else {
            if (this.currentWindowSize === null || this.currentWindowSize === 0) {
                const containers = document.querySelectorAll('.grid');
                for (let i = 0; i < containers.length; i++) {
                    if (containers[i]) {
                        const container = (containers[i] as HTMLElement);
                        if (container.classList.contains('loaded') === false) {
                            container.classList.add('loaded');
                        }
                        const items = container.querySelectorAll('.grid-item');
                        for (let j = 0; j < items.length; j++) {
                            if (items[j]) {
                                const item = (items[j] as HTMLElement);
                                if (item.classList.contains('shown') === false) {
                                    item.classList.add('shown');
                                }
                            }
                        }
                    }
                }
                this.currentWindowSize = 0;
                // this.showTimeline();
            } else {
                this.reload();
            }
        }
    }

    hightlightGridLayoutAdjuster() {
        setTimeout(() => {
            const gridElm: HTMLElement = document.getElementById('grid');
            const highlightGridElms = document.querySelectorAll('.assign-grid-width');
            if (gridElm && highlightGridElms.length > 0) {
                const props: ClientRect = gridElm.getBoundingClientRect();
                if (props) {
                    for ( var i = 0; i < highlightGridElms.length; i ++) {
                        (highlightGridElms[i] as HTMLElement).style.width = props.width + 'px';
                        if ((highlightGridElms[i] as HTMLElement).classList.contains('assign-opacity')) {
                            (highlightGridElms[i] as HTMLElement).style.opacity = '1';
                        }
                    }
                }
            }
        });
    }
    drawerClickListener(e: MouseEvent) {
        let elem: HTMLElement = e.target as HTMLElement;
        let found = false;
        while (!found && elem.parentElement) {
            if (elem.classList.contains('project-drawer')) {
                found = true;
            }
            if (found) {
                break;
            } else {
                elem = elem.parentElement;
            }
        }
        if (!found) {
            const elemTarget: any = document.querySelector('[data-tag="project-drawer"]');
            if (elemTarget) {
                elemTarget.classList.remove('anim', 'in');
                elemTarget.classList.add('anim', 'out');
                document.body.classList.remove('no-overflow');
            }
        }
        projectDrawerOpened = false;
    }
    drawerKeyUpListener(e: KeyboardEvent) {
        if (e.keyCode === 27) {
            const elemTarget: any = document.querySelector('[data-tag="project-drawer"]');
            if (elemTarget) {
                elemTarget.classList.remove('anim', 'in');
                elemTarget.classList.add('anim', 'out');
                document.body.classList.remove('no-overflow');
                projectDrawerOpened = false;
            }
        }
    }

    closeProjectDrawer() {
        projectDrawerOpened = false;
        const elem: HTMLElement = document.getElementById(this.drawerId);
        if (elem) {
            elem.classList.remove('anim', 'in');
            elem.classList.add('anim', 'out');
        }
        document.removeEventListener('click', this.drawerClickListener);
        document.body.classList.remove('no-overflow');
    }

    openProjectDrawer(item) {
        document.removeEventListener('click', this.drawerClickListener);
        document.removeEventListener('keyup', this.drawerKeyUpListener);
        const elem: HTMLElement = document.getElementById(this.drawerId);
        const drawerContainer: any = document.querySelector('[data-tag="project-drawer"]');
        if (elem) {
            projectDrawerOpened = !projectDrawerOpened;
            if (projectDrawerOpened) {
                let bgColor = COLORS[item.bgColor];
                const rgb = hexToRgb(bgColor);
                drawerContainer.style.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b},0.80)`;
                const projectElm = document.getElementById(item.id);
                const projectDrawerElm = document.querySelector('[data-tag="project-drawer-bg"]');
                if (projectDrawerElm) {
                    (projectDrawerElm as HTMLElement).style.backgroundColor = bgColor;
                }
                const elemTitle = elem.querySelector('[data-tag="project-drawer-title"]');
                if (elemTitle) {
                    elemTitle.textContent = item.name;
                    elemTitle.classList.remove('darker');
                    if (item.darker) {
                        elemTitle.classList.add('darker');
                    }
                }
                const elemDescription = elem.querySelector('[data-tag="project-drawer-description"]');
                if (elemDescription) {
                    if (item.content) {
                        elemDescription.innerHTML = item.content || '';
                    } else {
                        elemDescription.textContent = item.description || '';
                    }
                }
                const webLnk = elem.querySelector('[data-tag="app-link"]');
                webLnk.classList.remove('show');
                if (item.publishSrc) {
                    if (webLnk) {
                        (webLnk as HTMLAnchorElement).href = item.publishSrc;
                        webLnk.classList.add('show');
                        (webLnk as HTMLElement).style.backgroundColor = COLORS[item.bgColor];
                        (webLnk as HTMLElement).style.color = '#fff';
                        if (item.darker) {
                            (webLnk as HTMLElement).style.color = '#000';
                        }
                    }
                }
                const gitLnk = elem.querySelector('[data-tag="source-code"]');
                gitLnk.classList.remove('show');
                if (item.githubSrc) {
                    if (gitLnk) {
                        (gitLnk as HTMLAnchorElement).href = item.githubSrc;
                        gitLnk.classList.add('show');
                        (gitLnk as HTMLElement).style.backgroundColor = COLORS[item.bgColor];
                        (gitLnk as HTMLElement).style.color = '#fff';
                        if (item.darker) {
                            (gitLnk as HTMLElement).style.color = '#000';
                        }
                    }
                }
                const elemClose = elem.querySelector('.close');
                if (elemClose) {
                    elemClose.classList.remove('darker');
                    if (item.darker) {
                        elemClose.classList.add('darker');
                    }
                }
                elem.classList.remove('anim', 'out');
                elem.classList.add('anim', 'in');
                document.body.classList.add('no-overflow');
                setTimeout(() => {
                    document.addEventListener('click', this.drawerClickListener);
                    document.addEventListener('keyup', this.drawerKeyUpListener);
                });
            }
        }
    }
}