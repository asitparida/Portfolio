import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './about-me/header/header.component';
import { ProjectsComponent } from './other-projects/projects/projects.component';
import { GitLinkComponent } from './git-link.component';
import { BioComponent } from './about-me/bio/bio.component';
import { DeferLoadDirective } from './other-projects/projects/defer-load.directive';
import { TopScrollerComponent } from './structure/top-scroller/top-scroller.component';
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
import { PictureCarouselComponent } from './structure/picture-carousel/picture-carousel.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { NavigationComponent } from './structure/navigation/navigation.component';
import { ContactComponent } from './about-me/contact/contact.component';
import { ImgZoomerDirective } from './img-zoomer.directive';
import { ClickOutsideDirective } from './click-outside.directive';
import { PrototypeViewerComponent } from './structure/prototype-viewer/prototype-viewer.component';
import { PitchVideoComponent } from './structure/pitch-video/pitch-video.component';
import { ProjectPreviewerComponent } from './structure/project-previewer/project-previewer.component';
import { GifLoaderDirective } from './gif-loader.directive';
import { AnchorageHolderComponent } from './structure/anchorage-holder/anchorage-holder.component';
import { PrismSnippetComponent } from './structure/prism-snippet/prism-snippet.component';
import { FooterComponent } from './structure/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
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
