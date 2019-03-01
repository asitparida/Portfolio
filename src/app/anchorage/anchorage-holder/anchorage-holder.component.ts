import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'anchorage-holder',
    templateUrl: './anchorage-holder.component.html',
    styleUrls: ['./anchorage-holder.component.scss']
})
export class AnchorageHolderComponent implements OnInit, AfterViewInit {
    anchors = [];
    anchorageHolderId = 'anchorageHolder' + Math.floor(Math.random() * 10e8);
    ondebouncedScroll = _.debounce(this.onNewScroll, 10);
    shown = false;
    constructor() { }

    ngOnInit() {
    }

    @HostListener('document:scroll')
    onscroll() {
        this.ondebouncedScroll();
    }
    onNewScroll() {
        const anchors = document.querySelectorAll('[data-type="anchor-elem"]');
        if (anchors && anchors.length > 0) {
            for (let i = 0; i < anchors.length; i++) {
                const elem = anchors[i] as HTMLElement;
                const props = elem.getBoundingClientRect();
                const circleId = 'circle' + elem.id;
                const circle = document.getElementById(circleId);
                if (props.top > 0 && props.top < window.innerHeight) {
                    if (circle) {
                        this.removeActiveFromAnchors(circleId);
                        circle.classList.add('active');
                        break;
                    }
                }
            }
        }
    }
    removeActiveFromAnchors(targetAnchorId) {
        const anchors = document.querySelectorAll('[data-type="anchor-elem"]');
        if (anchors && anchors.length > 0) {
            (anchors as any).forEach((elem: HTMLElement) => {
                const circleId = 'circle' + elem.id;
                if (circleId !== targetAnchorId) {
                    const circle = document.getElementById(circleId);
                    if (circle) {
                        circle.classList.remove('active');
                    }
                }
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.anchors = [];
            const anchors = document.querySelectorAll('[data-type="anchor-elem"]');
            if (anchors && anchors.length > 0) {
                (anchors as any).forEach((elem: HTMLElement) => {
                    const id = 'anchor_elm' + Math.floor(Math.random() * 10e8);
                    elem.id = id;
                    this.anchors.push({ id: id, text: elem.textContent, circleId: 'circle' + id });
                });
            }
            setTimeout(() => {
                this.onNewScroll();
            });
        });
    }
    activateAnchor(anchor) {
        const elem = document.getElementById(anchor.id);
        if (elem) {
            const props = (elem as HTMLElement).getBoundingClientRect();
            if (typeof window.scrollTo !== 'undefined') {
                window.scrollBy({
                    top: props.top - 100, // could be negative value
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
}
