import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/internal/operators';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnInit {
    navigationBarId = 'navbar' + Math.floor(Math.random() * 10e8);
    classAdded = false;
    lastScrollPosition = null;
    lastUid = -1;
    directionFill = 'left';
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.router.events
        .pipe(filter(event => event instanceof RoutesRecognized))
        .subscribe((data: RoutesRecognized) => {
            // tslint:disable-next-line:max-line-length
            if (data && data.state && data.state.root && data.state.root.firstChild && data && data.state && data.state.root && data.state.root.firstChild.data) {
                const uid = data.state.root.firstChild.data['uid'] || -1;
            if (uid < this.lastUid) {
                this.directionFill = 'right';
            } else {
                this.directionFill = 'left';
            }
            this.lastUid = uid;
            }
        });
    }
    ngAfterViewInit() {
        const elem = document.getElementById(this.navigationBarId);
        document.addEventListener('scroll', (event) => {
            if (window.scrollY < this.lastScrollPosition) {
                if (this.classAdded) {
                    elem.classList.remove('out-of-view');
                    this.classAdded = false;
                }
            } else if (window.scrollY - this.lastScrollPosition >= 100) {
                if (!this.classAdded) {
                    elem.classList.add('out-of-view');
                    this.classAdded = true;
                }
            }
            this.lastScrollPosition = window.scrollY;
        });
    }

}
