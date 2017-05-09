import {
    Component,
    AfterViewInit,
    ViewEncapsulation
} from '@angular/core';

import * as _ from 'underscore';

class Project {
    id: string;
    name: string;
    description: string;
    githubSrc: string;
    publishSrc: string;
    imgSrc: string;
    size: string;
    hoverbg: string;
    constructor() {
        this.name = 'Lorem ipsum dolor sit amet';
        this.hoverbg = _.sample<string>(['default2', 'orange', 'orange2', 'blue', 'purple', 'yellow', 'red', 'green']);
    }
}


declare var GridScrollFx: any;

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements AfterViewInit {
    title = 'app works!';
    projects: any[] = [];
    constructor() {
        let self = this;
        _.each(_.range(1, 18), (_iter) => {
            let _project = new Project();
            _project.size = 'single';
            if (_.contains([3, 6, 7, 12, 13], _iter) === true) {
                _project.size = 'double';
            }
            self.projects.push(_project);
        });
    }
    ngAfterViewInit() {
        let _grid  = new GridScrollFx(document.getElementById('grid'), {
            viewportFactor: 1
        });
        console.log(_grid);
    }
}
