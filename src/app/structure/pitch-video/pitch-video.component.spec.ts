import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchVideoComponent } from './pitch-video.component';

describe('PitchVideoComponent', () => {
  let component: PitchVideoComponent;
  let fixture: ComponentFixture<PitchVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
