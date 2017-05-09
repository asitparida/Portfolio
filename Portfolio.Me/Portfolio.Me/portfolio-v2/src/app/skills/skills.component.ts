import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'underscore';

class Skill {
    id: string;
    src: string;
    tag: string;
    constructor(_id: string, _src: string, _tag: string) {
        this.id = _id;
        this.src = _src;
        this.tag = _tag;
    }
}

const SKILLS_ARRAY: any[] = [
    {id: 'html5', src: 'assets/profile-skills/html5.png', tag: 'HTML5'},
    {id: 'css3', src: 'assets/profile-skills/css3.png', tag: 'CSS3'},
    {id: 'bootstrap', src: 'assets/profile-skills/bootstrap.png', tag: 'Bootstrap'},
    {id: 'scss', src: 'assets/profile-skills/scss.png', tag: 'SCSS'},
    {id: 'material', src: 'assets/profile-skills/material.png', tag: 'Material'},
    {id: 'js', src: 'assets/profile-skills/js.png', tag: 'Javascript'},
    {id: 'ts', src: 'assets/profile-skills/ts.png', tag: 'Typescript'},
    {id: 'gsap', src: 'assets/profile-skills/gsap.png', tag: 'GSAP'},
    {id: 'ang', src: 'assets/profile-skills/ang.png', tag: 'Angular JS 1.x'},
    {id: 'ang2', src: 'assets/profile-skills/ang2.png', tag: 'Angular 2'},
    {id: 'react', src: 'assets/profile-skills/react.png', tag: 'React JS'},
    {id: 'vue', src: 'assets/profile-skills/vue.png', tag: 'Vue JS'},
    {id: 'mithtril', src: 'assets/profile-skills/mithtril.png', tag: 'Mithtril JS'},
    {id: 'ko', src: 'assets/profile-skills/ko.png', tag: 'Knockout JS'},
    {id: 'electron', src: 'assets/profile-skills/electron.png', tag: 'Electron'},
    {id: 'visualstudio', src: 'assets/profile-skills/visualstudio.png', tag: 'Visual Studio'},
    {id: 'git', src: 'assets/profile-skills/git.png', tag: 'Git'},
    {id: 'gulp', src: 'assets/profile-skills/gulp.png', tag: 'Gulp'},
    {id: 'npm', src: 'assets/profile-skills/npm.png', tag: 'NPM'},
    {id: 'bower', src: 'assets/profile-skills/bower.png', tag: 'Bower'},
    {id: 'sql', src: 'assets/profile-skills/sql.png', tag: 'SQL'},
    {id: 'aspnetmvc', src: 'assets/profile-skills/aspnetmvc.png', tag: 'Asp Net MVC'},
    {id: 'adobe-ps', src: 'assets/profile-skills/adobe-ps.png', tag: 'Adobe Photoshop'},
    {id: 'adobe-ai', src: 'assets/profile-skills/adobe-ai.png', tag: 'Adobe Illustrator'},
];

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    title = 'app works!';
    skills: Skill[] = [];
    constructor() {
        let self = this;
        _.each(SKILLS_ARRAY, (_item, _iter: any) => {
            let _skill: Skill = new Skill(_item['id'], _item['src'], _item['tag']);
            self.skills.push(_skill);
        });
    }
    scrollLeft = function () {
        let _scrollElm: HTMLElement = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft - (window.innerWidth / 3) }, 300);
    }

    scrollRight = function () {
        let _scrollElm: HTMLElement = document.getElementById('contentSkillsList');
        $(_scrollElm).animate({ scrollLeft: _scrollElm.scrollLeft + (window.innerWidth / 3) }, 300);
    }
}
