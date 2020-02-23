import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmnpMicroComponent } from './lmnp-micro.component';

describe('LmnpMicroComponent', () => {
  let component: LmnpMicroComponent;
  let fixture: ComponentFixture<LmnpMicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmnpMicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmnpMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
