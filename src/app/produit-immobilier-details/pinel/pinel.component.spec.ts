import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinelComponent } from './pinel.component';

describe('PinelComponent', () => {
  let component: PinelComponent;
  let fixture: ComponentFixture<PinelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
