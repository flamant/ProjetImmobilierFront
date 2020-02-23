import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmnpReelComponent } from './lmnp-reel.component';

describe('LmnpReelComponent', () => {
  let component: LmnpReelComponent;
  let fixture: ComponentFixture<LmnpReelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmnpReelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmnpReelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
