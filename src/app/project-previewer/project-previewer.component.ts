import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project, BASE_COLORS, hexToRgb } from '../projects/projects.component';
import { Projects } from '../projects/projects.definitions';

@Component({
    selector: 'app-project-previewer',
    templateUrl: './project-previewer.component.html',
    styleUrls: ['./project-previewer.component.scss']
})
export class ProjectPreviewerComponent implements OnInit {

    @Input() projectId = 'uif-fabric';
    @Input() drawerOpened = false;
    @Output() drawerOpenedChange = new EventEmitter<boolean>();
    backgroundColor = `rgba(0,0,0,0)`;
    project = null;

    constructor() { }

    ngOnInit() {
        document.body.classList.add('no-overflow');
        const item = Projects.find(x => x.name === this.projectId);
        if (item) {
            this.project = this.getProject(item);
            const bgColor = BASE_COLORS[item.bgColor];
            const rgb = hexToRgb(bgColor);
            this.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b},0.90)`;
        }
    }
    closeDrawer() {
        this.drawerOpened = false;
        this.drawerOpenedChange.emit(this.drawerOpened);
        document.body.classList.remove('no-overflow');
    }
    getProject(_item) {
        const _project = new Project();
            _project.name = _item.name;
            _project.description = _item.description;
            _project.githubSrc = _item.git;
            _project.publishSrc = _item.href;
            _project.imgSrc = _item.img;
            _project.content = _item.content;
            _project.darker = _item.darker || false;
            _project.isNew = _item.isNew || false;
            if (_item.size != null) {
                _project.landscapeSize = _item.size;
            }
            if (_item.width != null) {
                _project.width = _item.width;
            }
            if (_item.height != null) {
                _project.height = _item.height;
            }
            if (_item.bgColor != null) {
                _project.bgColor = _item.bgColor;
            }
        return _project;
    }

}
