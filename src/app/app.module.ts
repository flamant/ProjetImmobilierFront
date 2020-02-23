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
import { HeaderComponent } from './components/header/header.component';
import { CreateProduitImmobilierDialogComponent } from './create-produit-immobilier-dialog/create-produit-immobilier-dialog.component';
import { PinelComponent } from './produit-immobilier-details/pinel/pinel.component';
import { Pinel9Component } from './produit-immobilier-details/pinel9/pinel9.component';
import { Pinel12Component } from './produit-immobilier-details/pinel12/pinel12.component';
import { BouvardComponent } from './produit-immobilier-details/bouvard/bouvard.component';
import { LmnpMicroComponent } from './produit-immobilier-details/lmnp-micro/lmnp-micro.component';
import { LmnpReelComponent } from './produit-immobilier-details/lmnp-reel/lmnp-reel.component';
import { DragDropDirective } from './drag-drop.directive';
import { AutofocusDirective } from './autofocus.directive';

registerLocaleData(localeFr, 'fr');
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);


@NgModule({
  declarations: [
    AppComponent,
    ListProduitImmobilierComponent,
    ProduitImmobilierDetailsComponent,
    SearchComponent,
    UserDialogComponent,
    HeaderComponent,
    CreateProduitImmobilierDialogComponent,
    PinelComponent,
    Pinel9Component,
    Pinel12Component,
    BouvardComponent,
    LmnpMicroComponent,
    LmnpReelComponent,
    DragDropDirective,
    AutofocusDirective

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
  // tslint:disable-next-line: max-line-length
  entryComponents: [SearchComponent, UserDialogComponent, CreateProduitImmobilierDialogComponent, PinelComponent, Pinel9Component, Pinel12Component, BouvardComponent, LmnpMicroComponent, LmnpReelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
