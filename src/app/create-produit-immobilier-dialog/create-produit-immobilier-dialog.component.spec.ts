import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitImmobilierDialogComponent } from './create-produit-immobilier-dialog.component';

describe('CreateProduitImmobilierDialogComponent', () => {
  let component: CreateProduitImmobilierDialogComponent;
  let fixture: ComponentFixture<CreateProduitImmobilierDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduitImmobilierDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduitImmobilierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
