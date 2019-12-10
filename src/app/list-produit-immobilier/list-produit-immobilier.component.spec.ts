import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitImmobilierComponent } from './list-produit-immobilier.component';

describe('ListProduitImmobilierComponent', () => {
  let component: ListProduitImmobilierComponent;
  let fixture: ComponentFixture<ListProduitImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProduitImmobilierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
