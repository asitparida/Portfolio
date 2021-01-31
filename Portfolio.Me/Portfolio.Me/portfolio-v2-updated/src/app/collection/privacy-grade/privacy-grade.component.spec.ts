import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyGradeComponent } from './privacy-grade.component';

describe('PrivacyGradeComponent', () => {
  let component: PrivacyGradeComponent;
  let fixture: ComponentFixture<PrivacyGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
