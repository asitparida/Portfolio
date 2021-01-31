import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeritasComponent } from './veritas.component';

describe('VeritasComponent', () => {
  let component: VeritasComponent;
  let fixture: ComponentFixture<VeritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
