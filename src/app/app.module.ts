import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProduitImmobilierComponent } from './list-produit-immobilier/list-produit-immobilier.component';
import { ProduitImmobilierDetailsComponent } from './produit-immobilier-details/produit-immobilier-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

registerLocaleData(localeFr, 'fr');
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);


@NgModule({
  declarations: [
    AppComponent,
    ListProduitImmobilierComponent,
    ProduitImmobilierDetailsComponent,
    SearchComponent,
    UserDialogComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [SearchComponent, UserDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
