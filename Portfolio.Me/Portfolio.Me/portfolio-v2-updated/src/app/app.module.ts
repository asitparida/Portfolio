import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { ProjectsComponent } from '../app/projects/projects.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { FooterComponent } from '../app/footer/footer.component';
import { GitLinkComponent } from './git-link.component';
import { BioComponent } from './bio/bio.component';
import { DeferLoadDirective } from './projects/defer-load.directive';
import { TopScrollerComponent } from './top-scroller/top-scroller.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { BunBunComponent } from './collection/bun-bun/bun-bun.component';
import { NotSoGreyComponent } from './collection/not-so-grey/not-so-grey.component';
import { LeanCaseComponent } from './collection/lean-case/lean-case.component';
import { MoosikComponent } from './collection/moosik/moosik.component';
import { VeritasComponent } from './collection/veritas/veritas.component';
import { TransitDisplayComponent } from './collection/transit-display/transit-display.component';
import { IdiffComponent } from './collection/idiff/idiff.component';
import { PrivacyGradeComponent } from './collection/privacy-grade/privacy-grade.component';
import { PictureCarouselComponent } from './picture-carousel/picture-carousel.component';
import { TeamBadgeComponent } from './team-badge/team-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    GitLinkComponent,
    DeferLoadDirective,
    BioComponent,
    TopScrollerComponent,
    BunBunComponent,
    HomeComponent,
    NotSoGreyComponent,
    LeanCaseComponent,
    MoosikComponent,
    VeritasComponent,
    TransitDisplayComponent,
    IdiffComponent,
    PrivacyGradeComponent,
    PictureCarouselComponent,
    TeamBadgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
