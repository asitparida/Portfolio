import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BunBunComponent } from './collection/bun-bun/bun-bun.component';
import { NotSoGreyComponent } from './collection/not-so-grey/not-so-grey.component';
import { VeritasComponent } from './collection/veritas/veritas.component';
import { LeanCaseComponent } from './collection/lean-case/lean-case.component';
import { PrivacyGradeComponent } from './collection/privacy-grade/privacy-grade.component';
import { TransitDisplayComponent } from './collection/transit-display/transit-display.component';
import { IdiffComponent } from './collection/idiff/idiff.component';
import { MoosikComponent } from './collection/moosik/moosik.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { uid: 1000 } },
    { path: 'about-me', component: AboutMeComponent, data: { uid: 5000 } },
    { path: 'contact', component: ContactComponent },
    { path: 'other-projects', component: OtherProjectsComponent, data: { uid: 3000 } },
    { path: 'tools', component: MySkillsComponent, data: { uid: 4000 } },
    { path: 'featured', redirectTo: 'featured/veritas', pathMatch: 'full', data: { uid: 2000 } },
    { path: 'featured/bun-bun', component: BunBunComponent, data: { uid: 2001 } },
    { path: 'featured/not-so-grey', component: NotSoGreyComponent, data: { uid: 2002 } },
    { path: 'featured/veritas', component: VeritasComponent, data: { uid: 2003 } },
    { path: 'featured/lean-case', component: LeanCaseComponent, data: { uid: 2004 } },
    { path: 'featured/privacy-grade', component: PrivacyGradeComponent, data: { uid: 2005 } },
    { path: 'featured/transit-display', component: TransitDisplayComponent, data: { uid: 2006 } },
    { path: 'featured/idiff', component: IdiffComponent, data: { uid: 2007 } },
    { path: 'featured/moosik', component: MoosikComponent, data: { uid: 2008 } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
