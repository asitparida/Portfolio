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

const appRoutes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'bun-bun', component: BunBunComponent },
    { path: 'not-so-grey', component: NotSoGreyComponent },
    { path: 'veritas', component: VeritasComponent },
    { path: 'lean-case', component: LeanCaseComponent },
    { path: 'privacy-grade', component: PrivacyGradeComponent },
    { path: 'transit-display', component: TransitDisplayComponent },
    { path: 'idiff', component: IdiffComponent },
    { path: 'moosik', component: MoosikComponent }
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
