import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills/skills.component';

const SkillGroups = [
    {
        title: 'Web Development',
        skills: [
            { id: 'html5', src: 'assets/profile-skills/html5.png', tag: 'HTML5' },
            { id: 'css3', src: 'assets/profile-skills/css3.png', tag: 'CSS3' },
            { id: 'js', src: 'assets/profile-skills/js.png', tag: 'Javascript' },
            { id: 'scss', src: 'assets/profile-skills/scss.png', tag: 'SCSS' },
            { id: 'ts', src: 'assets/profile-skills/ts.png', tag: 'Typescript' }
        ]
    },
    {
        title: 'Design Tools',
        skills: [
            { id: 'adobe-ps', src: 'assets/profile-skills/adobe-ps.png', tag: 'Adobe Photoshop' },
            { id: 'adobe-ai', src: 'assets/profile-skills/adobe-ai.png', tag: 'Adobe Illustrator' },
            { id: 'adobe-xd', src: 'assets/profile-skills/adobe-xd.png', tag: 'Adobe XD' },
            { id: 'figma', src: 'assets/profile-skills/figma.png', tag: 'Figma' },
        ]
    },
    {
        title: 'Dev Stack',
        skills: [
            { id: 'web', src: 'assets/profile-skills/web.png', tag: 'Web' },
            { id: 'nodejs', src: 'assets/profile-skills/node-js.png', tag: 'NodeJS' },
            { id: 'aspnetmvc', src: 'assets/profile-skills/aspnetmvc.png', tag: 'Asp Net MVC' },
            { id: 'sql', src: 'assets/profile-skills/sql.png', tag: 'SQL' },
        ]
    },
    {
        title: 'Frameworks',
        skills: [
            { id: 'react', src: 'assets/profile-skills/react.png', tag: 'React JS' },
            { id: 'react-native', src: 'assets/profile-skills/react-native.png', tag: 'React Native' },
            { id: 'ang2', src: 'assets/profile-skills/ang2.png', tag: 'Angular 2/6' },
            { id: 'ang', src: 'assets/profile-skills/ang.png', tag: 'Angular JS 1.x' },
            { id: 'bootstrap', src: 'assets/profile-skills/bootstrap.png', tag: 'Bootstrap' },
            { id: 'gsap', src: 'assets/profile-skills/gsap.png', tag: 'GSAP' },
            { id: 'vue', src: 'assets/profile-skills/vue.png', tag: 'Vue JS' },
            { id: 'mithtril', src: 'assets/profile-skills/mithtril.png', tag: 'Mithtril JS' },
            { id: 'ko', src: 'assets/profile-skills/ko.png', tag: 'Knockout JS' },
            { id: 'electron', src: 'assets/profile-skills/electron.png', tag: 'Electron' },
        ]
    },
    {
        title: 'Build Tools & Editors',
        skills: [
            { id: 'visualstudio', src: 'assets/profile-skills/visualstudio.png', tag: 'Visual Studio' },
            { id: 'git', src: 'assets/profile-skills/git.png', tag: 'Git' },
            { id: 'gulp', src: 'assets/profile-skills/gulp.png', tag: 'Gulp' },
            { id: 'npm', src: 'assets/profile-skills/npm.png', tag: 'NPM' },
            { id: 'bower', src: 'assets/profile-skills/bower.png', tag: 'Bower' },
        ]
    }
];

@Component({
    selector: 'app-my-skills',
    templateUrl: './my-skills.component.html',
    styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
    skillGroups = SkillGroups;
    constructor() { }

    ngOnInit() {
        document.documentElement.setAttribute('data-color', '$NONE');
    }

}
