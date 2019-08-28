import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { ProjectsComponent } from '../app/projects/projects.component';
import { SkillsComponent } from '../app/skills/skills.component';
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
import { AboutMeComponent } from './about-me/about-me.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { ImgZoomerDirective } from './img-zoomer.directive';
import { ClickOutsideDirective } from './click-outside.directive';
import { PrototypeViewerComponent } from './prototype-viewer/prototype-viewer.component';
import { PitchVideoComponent } from './pitch-video/pitch-video.component';
import { ProjectPreviewerComponent } from './project-previewer/project-previewer.component';
import { GifLoaderDirective } from './gif-loader.directive';
import { AnchorageHolderComponent } from './anchorage/anchorage-holder/anchorage-holder.component';
import { PrismSnippetComponent } from './prism-snippet/prism-snippet.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
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
    TeamBadgeComponent,
    AboutMeComponent,
    OtherProjectsComponent,
    MySkillsComponent,
    NavigationComponent,
    ContactComponent,
    ImgZoomerDirective,
    ClickOutsideDirective,
    PrototypeViewerComponent,
    PitchVideoComponent,
    ProjectPreviewerComponent,
    GifLoaderDirective,
    AnchorageHolderComponent,
    PrismSnippetComponent
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
