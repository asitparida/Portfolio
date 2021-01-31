import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotSoGreyComponent } from './not-so-grey.component';

describe('NotSoGreyComponent', () => {
  let component: NotSoGreyComponent;
  let fixture: ComponentFixture<NotSoGreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotSoGreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotSoGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
