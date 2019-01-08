import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanCaseComponent } from './lean-case.component';

describe('LeanCaseComponent', () => {
  let component: LeanCaseComponent;
  let fixture: ComponentFixture<LeanCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeanCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
