
import {
    Component,
    AfterViewInit,
    ViewEncapsulation,
    OnInit,
    HostListener
} from '@angular/core';
import * as _ from 'underscore';

import { GitHubDataService } from './github-data.service';
// import { setTimeout } from 'timers';

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
};

class GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    size: number;
    created_at: Date;
    updated_at: Date;
    language: string;
    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.full_name = data.full_name;
        this.size = data.size;
        this.created_at = new Date(data.created_at);
        this.updated_at = new Date(data.updated_at);
        this.language = data.language;
    }
}

interface SvgGraph {
    repo: GitHubRepo;
    data: any;
    x: number;
    y: number;
}

interface LanguageGrapg {
    lang: string;
    repos: GitHubRepo[];
    x: number;
    y: number;
}

@Component({
    selector: 'app-github-data',
    templateUrl: './github-data.component.html',
    styleUrls: ['./github-data.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GitHubDataComponent implements OnInit, AfterViewInit {
    collection: GitHubRepo[] = [];
    sizeBasedGraph: SvgGraph[] = [];
    languageBasedGraph: LanguageGrapg[] = [];
    hideGraphs: Boolean = true;
    constructor(private githubService: GitHubDataService) { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.hideGraphs) {
            return;
        }
        this.githubService.getGitHubReposData().subscribe((data: any[]) => {
            const tempCollection = [];
            data.forEach((item: any) => {
                tempCollection.push(new GitHubRepo(item));
            });
            this.collection = tempCollection;
            this.sizeBasedGraph = this.collection.map((item: GitHubRepo) => {
                return { repo: item, data: item.size, x: 0, y: 0 };
            });
            this.sizeBasedGraph = this.sizeBasedGraph.sort((x, y) => x.repo.size - y.repo.size);
            this.sizeBasedGraph = this.sizeBasedGraph.sort((x, y) => x.repo.size - y.repo.size);
            const languages = _.unique(this.collection.map(x => x.language));
            this.languageBasedGraph = languages.map((lang: string) => {
                return { lang: lang, repos: this.collection.filter(x => x.language === lang), x: 0, y: 0 };
            });
            this.redrawGraphs();
        });
    }

    @HostListener('window:resize', ['$event'])
    redrawGraphs(event?) {
        setTimeout(() => {
            if (this.hideGraphs) {
                return;
            }
            const containers = document.querySelectorAll('.svg-wrap');
            if (window.innerWidth > 768) {
                if (containers && containers.length > 0) {
                    for (let i = 0; i < containers.length; i++) {
                        (containers[i] as HTMLElement).style.display = 'BLOCK';
                    }
                }
                const widthSrcElem = document.querySelector('[data-tag="take-width"]');
                if (widthSrcElem) {
                    const width = (widthSrcElem.getBoundingClientRect()).width;
                    const svgContainer = document.querySelectorAll('[data-tag="adjust-width"]');
                    for (let i = 0; i < svgContainer.length; i++) {
                        (svgContainer[i] as HTMLElement).style.width = width + 'px';
                    }
                }
                this.processForSizeBasedGraph(event);
                this.processForLanguageBasedGraph(event);
            } else {
                if (containers && containers.length > 0) {
                    for (let i = 0; i < containers.length; i++) {
                        (containers[i] as HTMLElement).style.display = 'NONE';
                    }
                }
            }
        }, 1);
    }

    processForSizeBasedGraph(event?) {
        const widthSrcElem = document.querySelector('[data-tag="take-width"]');
        const svgElem = document.getElementById('svg_graph');
        svgElem.innerHTML = '';
        if (widthSrcElem) {
            const width = (widthSrcElem.getBoundingClientRect()).width;
            svgElem.setAttribute('width', width + 'px');
        }
        const svgElemProps = svgElem.getBoundingClientRect();
        const height = 150;
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.style.stroke = '#9ccdec';
        polygon.style.strokeWidth = '1';
        polygon.style.fill = '#eff7fc';
        let gap = Math.floor(svgElemProps.width / (this.sizeBasedGraph.length + 1));
        const maxSize = 12000;
        let scale = (height / maxSize);
        let points = '';
        const minY = _.min(this.sizeBasedGraph.map(x => x.data));
        const maxY = maxSize;
        const circleRadius = 10;
        this.sizeBasedGraph.forEach((item: SvgGraph, index: number) => {
            let x = (index + 1) * gap;
            x = x === 0 ? circleRadius : x;
            let y = item.data;
            y = (y / (maxY - minY)) * height;
            y = Math.floor(y);
            y = y > height ? (height - circleRadius) : y;
            item.x = x;
            item.y = y;
        });
        this.sizeBasedGraph.forEach((item: SvgGraph, index: number) => {
            points = points + ' ' + item.x + ',' + (height - item.y);
        });
        points = points + ' ' + svgElemProps.width + ',' + height;
        points = points + ' ' + '0,' + height;
        polygon.setAttribute('points', points);
        svgElem.appendChild(polygon);
        this.sizeBasedGraph.forEach((item: SvgGraph, index: number) => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('repo-anchor-group');
            group.setAttribute('tabindex', '0');
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.classList.add('repo-rect');
            rect.setAttribute('x', (item.x - (gap / 2)).toString());
            rect.setAttribute('y', '0');
            rect.setAttribute('width', gap.toString());
            rect.setAttribute('height', height.toString());
            group.appendChild(rect);
            const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            point.classList.add('repo-anchor');
            point.setAttribute('cx', item.x.toString());
            point.setAttribute('cy', (height - item.y).toString());
            point.setAttribute('r', '5');
            point.style.fill = COLORS.$PETER_RIVER;
            group.appendChild(point);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            const textPositionX = item.x;
            let textAnchor = 'middle';
            if (index < 2) {
                textAnchor = 'start';
            }
            if (index < this.sizeBasedGraph.length && index >= this.sizeBasedGraph.length - 3) {
                textAnchor = 'end';
            }
            let textPositionY = height - item.y - 30;
            textPositionY = textPositionY < 30 ? 45 : textPositionY;
            text.setAttribute('x', textPositionX.toString());
            text.setAttribute('y', textPositionY.toString());
            text.setAttribute('fill', '#333333');
            text.setAttribute('text-anchor', textAnchor);
            text.innerHTML = item.repo.name + ' : ' + item.data;
            text.classList.add('repo-text');
            group.appendChild(text);
            svgElem.appendChild(group);
        });
    }

    processForLanguageBasedGraph(event?) {
        const widthSrcElem = document.querySelector('[data-tag="take-width"]');
        const svgElem = document.getElementById('lang_graph');
        svgElem.innerHTML = '';
        if (widthSrcElem) {
            const width = (widthSrcElem.getBoundingClientRect()).width;
            svgElem.setAttribute('width', width + 'px');
        }
        const svgElemProps = svgElem.getBoundingClientRect();
        const height = 150;
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.style.stroke = '#9ccdec';
        polygon.style.strokeWidth = '1';
        polygon.style.fill = '#eff7fc';
        let gap = Math.floor(svgElemProps.width / (this.languageBasedGraph.length + 1));
        const maxSize = 10;
        let scale = (height / maxSize);
        let points = '';
        const minY = _.min(this.languageBasedGraph.map(x => x.repos.length));
        const maxY = maxSize;
        const circleRadius = 10;
        this.languageBasedGraph.forEach((item: LanguageGrapg, index: number) => {
            let x = (index + 1) * gap;
            x = x === 0 ? circleRadius : x;
            let y = item.repos.length;
            y = (y / (maxY - minY)) * height;
            y = Math.floor(y);
            y = y > height ? (height - circleRadius) : y;
            item.x = x;
            item.y = y;
        });
        this.languageBasedGraph.forEach((item: LanguageGrapg, index: number) => {
            points = points + ' ' + item.x + ',' + (height - item.y);
        });
        points = points + ' ' + svgElemProps.width + ',' + height;
        points = points + ' ' + '0,' + height;
        polygon.setAttribute('points', points);
        svgElem.appendChild(polygon);
        this.languageBasedGraph.forEach((item: LanguageGrapg, index: number) => {
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('repo-anchor-group');
            group.setAttribute('tabindex', '0');
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.classList.add('repo-rect');
            rect.setAttribute('x', (item.x - (gap / 2)).toString());
            rect.setAttribute('y', '0');
            rect.setAttribute('width', gap.toString());
            rect.setAttribute('height', height.toString());
            group.appendChild(rect);
            const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            point.classList.add('repo-anchor');
            point.setAttribute('cx', item.x.toString());
            point.setAttribute('cy', (height - item.y).toString());
            point.setAttribute('r', '5');
            point.style.fill = COLORS.$PETER_RIVER;
            group.appendChild(point);
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            const textPositionX = item.x;
            let textAnchor = 'middle';
            if (index < 2) {
                textAnchor = 'start';
            }
            if (index < this.languageBasedGraph.length && index >= this.languageBasedGraph.length - 3) {
                textAnchor = 'end';
            }
            let textPositionY = height - item.y - 30;
            textPositionY = textPositionY < 30 ? 45 : textPositionY;
            text.setAttribute('x', textPositionX.toString());
            text.setAttribute('y', textPositionY.toString());
            text.setAttribute('fill', '#333333');
            text.setAttribute('text-anchor', textAnchor);
            text.innerHTML = item.lang + ' : ' + item.repos.length + (item.repos.length === 1 ? ' repo' : ' repos');
            text.classList.add('repo-text');
            group.appendChild(text);
            svgElem.appendChild(group);
        });
    }
}
