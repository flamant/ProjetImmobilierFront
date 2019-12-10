import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitImmobilierDetailsComponent } from './produit-immobilier-details.component';

describe('ProduitImmobilierDetailsComponent', () => {
  let component: ProduitImmobilierDetailsComponent;
  let fixture: ComponentFixture<ProduitImmobilierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitImmobilierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitImmobilierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
