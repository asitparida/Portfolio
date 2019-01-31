import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeViewerComponent } from './prototype-viewer.component';

describe('PrototypeViewerComponent', () => {
  let component: PrototypeViewerComponent;
  let fixture: ComponentFixture<PrototypeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
