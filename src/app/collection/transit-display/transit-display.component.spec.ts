import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDisplayComponent } from './transit-display.component';

describe('TransitDisplayComponent', () => {
  let component: TransitDisplayComponent;
  let fixture: ComponentFixture<TransitDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
