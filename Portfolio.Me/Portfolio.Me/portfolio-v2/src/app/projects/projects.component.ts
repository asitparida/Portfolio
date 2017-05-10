import {
    Component,
    AfterViewInit,
    ViewEncapsulation
} from '@angular/core';

import * as _ from 'underscore';

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
    constructor() {
        this.size = 'single';
        this.width = '100%';
        this.height = 'auto';
        this.bgColor = '#fff';
    }
}

declare var GridScrollFx: any;

const PROECTS_ARRAY: any[] = [
    { name: 'Not So Grey', desc: 'A desktop app for folks who dream colors', git: 'https://github.com/asitparida/NotSoGrey', img: 'assets/project-logos/notsogrey_app.png', href: "https://github.com/asitparida/NotSoGrey", size: 'double', width: '90%', height: 'auto', bgColor: '$NEPHRITIS' },
    { name: 'Multihost Adapter', desc: 'An adapter for running multiple ui client frameworks together', git: 'https://github.com/asitparida/Multihost.Adapter', img: 'assets/project-logos/multihost.png', href: "https://github.com/asitparida/Multihost.Adapter", size: 'double', width: 'auto', height: '90%', bgColor: '$PETER_RIVER' },
    { name: 'Flintstones', desc: 'An small animation on flintstones chracters using GSAP', git: 'https://github.com/asitparida/GSAP.FlintStory', img: 'assets/project-logos/flintstones.png', href: "http://gsap-flintstones-asparida.azurewebsites.net/", size: 'double', width: 'auto', height: '90%', bgColor: '$SUNFLOWER' },
    { name: 'ng-grid', desc: 'angular 2 implementation for vx-grid', git: 'https://github.com/asitparida/ng-vxgrid', img: 'assets/project-logos/grid_app.png', href: "https://vxgrid-ng2.azurewebsites.net/home", width: '90%', height: 'auto', bgColor: '$PETER_RIVER' },
    { name: 'Reddit ', desc: 'Concept illustration for what Reddit may look like', git: 'https://github.com/asitparida/redesign-reddit', img: 'assets/project-logos/reddit.png', href: "http://redesign-reddit.azurewebsites.net/", width: '90%', height: 'auto', bgColor: '$ALIZARIN' },
    { name: 'Quick References', desc: 'blog for tl;dr snips on tech stacks', git: 'https://github.com/asitparida/QuickReferences', img: 'assets/project-logos/quickref.png', href: "http://quick-ref.azurewebsites.net", width: 'auto', height: '50%', bgColor: '$PETER_RIVER' },
    { name: 'Star Wars', desc: 'An small game built to destory all death stars', git: 'https://github.com/asitparida/StarWars.Game', img: 'assets/project-logos/starwars.png', href: "http://star-wars-asparida.azurewebsites.net", size: 'double', width: '70%', height: 'auto', bgColor: '$SUNFLOWER' },
    { name: 'Moosik', desc: 'An offline music player using Electron', git: 'https://github.com/asitparida/Moosik', img: 'assets/project-logos/moosik_app.png', href: "https://github.com/asitparida/Moosik/releases", size: 'double', width: '80%', height: 'auto', bgColor: '$PETER_RIVER' },
    { name: 'TopGit', desc: 'Browse top projects on GitHub', git: 'https://github.com/asitparida/TopGit', img: 'assets/project-logos/topgit_app.png', href: "http://topgit.azurewebsites.net", width: '90%', height: 'auto', bgColor: '$NEPHRITIS' },
    { name: 'CSS Loaders', desc: 'Robot like css loader animation', git: 'https://github.com/asitparida/CSSRobotLoader', img: 'assets/project-logos/cssloader.png', href: "http://css-loader-robot.azurewebsites.net", width: 'auto', height: '70%', bgColor: '$PUMPKIN' },
    { name: 'Tweening Photos', desc: 'Animating a classic movie wallpaper using GSAP', git: 'https://github.com/asitparida/GSAP.PhotoVector.Anim', img: 'assets/project-logos/photoanim.png', href: "http://gsap-pv-anim-asparida.azurewebsites.net", width: '90%', height: 'auto', bgColor: '$ALIZARIN' },
    { name: 'Segoe MDL Cheatsheet', desc: 'Web crawled SCSS sheet for MDL Icons', git: 'https://github.com/asitparida/SegoeMDLCheatsheet', img: 'assets/project-logos/icons.png', href: "https://github.com/asitparida/SegoeMDLCheatsheet", width: '150px', height: 'auto', bgColor: '$CARROT' },
    { name: 'Rich CC', desc: 'ng-plugin for showing calendar events', git: 'https://github.com/asitparida/RichCC', img: 'assets/project-logos/richcc.png', href: "http://richcc.azurewebsites.net",width: '90%', height: 'auto', bgColor: '$NEPHRITIS' },
    { name: 'Pie Mix', desc: 'ng-plugin built using SVG', git: 'https://github.com/asitparida/PieMix', img: 'assets/project-logos/piemix.png', href: "http://piemix.azurewebsites.net", width: 'auto', height: '70%', bgColor: '$AMETHYST' },
    { name: 'Vx Grid', desc: 'A DOM virtualized ng-plugin', git: 'https://github.com/asitparida/VxGrid', img: 'assets/project-logos/vx-grid.jpg', href: "http://vxgrid.azurewebsites.net", bgColor: '$ALIZARIN' },
    { name: 'Tweening Nature', desc: 'Animating a wallpaper using GSAP', git: 'https://github.com/asitparida/GSAP.Background.Anim', img: 'assets/project-logos/nature_tween.png', href: "http://gsap-bganim-asparida.azurewebsites.net", width: '90%', height: 'auto', bgColor: '$PETER_RIVER' },
    { name: 'Utilities', desc: 'quick utilities based on angularjs 1.x', git: 'https://github.com/asitparida?tab=repositories&q=Utility', img: 'assets/project-logos/swiss-knife.png', href: "https://github.com/asitparida?tab=repositories&q=Utility", width: '60%', height: 'auto', bgColor: '$ALIZARIN' },
    { name: 'Lazy Panda', desc: 'Just too lazy for emotions', git: 'https://github.com/asitparida/Lazy.Panda', img: 'assets/project-logos/panda.png', href: "http://lazypanda-asparida.azurewebsites.net", width: 'auto', height: '70%', bgColor: '$PETER_RIVER' },
];

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
        _.each(PROECTS_ARRAY, (_item: any, _iter: number) => {
            let _project = new Project();
            _project.name = _item.name;
            _project.description = _item.desc;
            _project.githubSrc = _item.git;
            _project.publishSrc = _item.href;
            _project.imgSrc = _item.img;
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
        let _grid = new GridScrollFx(document.getElementById('grid'), {
            viewportFactor: 1
        });
    }
}
