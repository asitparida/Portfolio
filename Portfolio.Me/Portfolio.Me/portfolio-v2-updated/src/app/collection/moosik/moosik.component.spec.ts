import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoosikComponent } from './moosik.component';

describe('MoosikComponent', () => {
  let component: MoosikComponent;
  let fixture: ComponentFixture<MoosikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoosikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoosikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
