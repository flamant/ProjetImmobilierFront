import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitImmobilierComponent } from './list-produit-immobilier/list-produit-immobilier.component';
import { ProduitImmobilierDetailsComponent } from './produit-immobilier-details/produit-immobilier-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/listproduitimmobilier',
    pathMatch: 'full'
  },
  {
    path: 'listproduitimmobilier',
    component: ListProduitImmobilierComponent
  },
  {
    path: 'details/:id',
    component: ProduitImmobilierDetailsComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,
      { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
