import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiffComponent } from './idiff.component';

describe('IdiffComponent', () => {
  let component: IdiffComponent;
  let fixture: ComponentFixture<IdiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
