import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottiPreviewComponent } from './components/prodotti-preview/prodotti-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { RatingsComponent } from './components/rating/ratings.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CarrelloMiniComponent } from './components/carrello-mini/carrello-mini.component';
import { PippoComponent } from './components/pippo/pippo.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottiPreviewComponent,
    HeaderComponent,
    RatingsComponent,
    CarrelloComponent,
    CarrelloMiniComponent,
    PippoComponent,
    ContattiComponent,
    ChiSiamoComponent,
    ProdottoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
