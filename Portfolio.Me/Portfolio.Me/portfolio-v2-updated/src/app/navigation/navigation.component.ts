import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
    navigationBarId = 'navbar' + Math.floor(Math.random() * 10e8);
    classAdded = false;
    lastScrollPosition = null;
    constructor() { }
    ngAfterViewInit() {
        const elem = document.getElementById(this.navigationBarId);
        document.addEventListener('scroll', (event) => {
            if (window.scrollY > this.lastScrollPosition) {
                if (!this.classAdded) {
                    elem.classList.add('out-of-view');
                    this.classAdded = true;
                }
            } else {
                if (this.classAdded) {
                    elem.classList.remove('out-of-view');
                    this.classAdded = false;
                }
            }
            this.lastScrollPosition = window.scrollY;
        });
    }

}
