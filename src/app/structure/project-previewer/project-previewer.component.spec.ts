import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPreviewerComponent } from './project-previewer.component';

describe('ProjectPreviewerComponent', () => {
  let component: ProjectPreviewerComponent;
  let fixture: ComponentFixture<ProjectPreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
