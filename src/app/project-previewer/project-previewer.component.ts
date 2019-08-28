import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Project, BASE_COLORS, hexToRgb } from '../projects/projects.component';
import { Projects } from '../projects/projects.definitions';
declare var MobileDetect: any;

@Component({
    selector: 'app-project-previewer',
    templateUrl: './project-previewer.component.html',
    styleUrls: ['./project-previewer.component.scss']
})
export class ProjectPreviewerComponent implements OnInit, AfterViewInit {

    @Input() projectId = 'uif-fabric';
    @Input() drawerOpened = false;
    @Output() drawerOpenedChange = new EventEmitter<boolean>();
    backgroundColor = `rgba(0,0,0,0)`;
    project = null;
    isMobile = false;
    originalItem = null;
    constructor() {
        if (MobileDetect) {
            const md = new MobileDetect(window.navigator.userAgent);
            // tslint:disable-next-line:max-line-length
            const value = md.mobile() || md.phone() || md.tablet() || md.is('iPhone') || md.is('Android') || md.is('android');
            if (value) {
                this.isMobile = true;
            }
        }
    }

    ngOnInit() {
        document.body.classList.add('no-overflow');
        const item = Projects.find(x => x.name === this.projectId);
        if (item) {
            this.originalItem = item;
            this.project = this.getProject(item);
            const bgColor = BASE_COLORS[item.bgColor];
            const rgb = hexToRgb(bgColor);
            this.backgroundColor = `rgba(${rgb.r},${rgb.g},${rgb.b},0.90)`;
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.setVideo();
        }, 300);
    }
    closeDrawer() {
        this.project.video = null;
        this.drawerOpened = false;
        this.drawerOpenedChange.emit(this.drawerOpened);
        document.body.classList.remove('no-overflow');
    }
    setVideo() {
        this.project.video = this.originalItem.video || null;
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
            _project.video = null;
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
