import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorageHolderComponent } from './anchorage-holder.component';

describe('AnchorageHolderComponent', () => {
  let component: AnchorageHolderComponent;
  let fixture: ComponentFixture<AnchorageHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorageHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorageHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
