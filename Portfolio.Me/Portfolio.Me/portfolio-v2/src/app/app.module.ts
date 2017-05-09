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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent,
    GitLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
