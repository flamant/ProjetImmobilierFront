import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pinel9Component } from './pinel9.component';

describe('Pinel9Component', () => {
  let component: Pinel9Component;
  let fixture: ComponentFixture<Pinel9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pinel9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pinel9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
