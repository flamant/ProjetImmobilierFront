import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouvardComponent } from './bouvard.component';

describe('BouvardComponent', () => {
  let component: BouvardComponent;
  let fixture: ComponentFixture<BouvardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouvardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouvardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
