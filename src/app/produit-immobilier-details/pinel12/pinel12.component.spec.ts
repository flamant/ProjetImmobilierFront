import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pinel12Component } from './pinel12.component';

describe('Pinel12Component', () => {
  let component: Pinel12Component;
  let fixture: ComponentFixture<Pinel12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pinel12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pinel12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
