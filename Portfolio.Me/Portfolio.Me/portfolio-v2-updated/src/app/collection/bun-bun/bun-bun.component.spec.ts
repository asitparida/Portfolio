import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunBunComponent } from './bun-bun.component';

describe('BunBunComponent', () => {
  let component: BunBunComponent;
  let fixture: ComponentFixture<BunBunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunBunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunBunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
