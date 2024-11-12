import { Injectable } from '@angular/core';
import { PRODOTTI } from "../data/prodotti";
import { Product } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodottiACarrello: Product[] = [];

  constructor() { }

  getProdotti() {
    return PRODOTTI as Product[];
  }

  aggiungiACarrello(prodotto: Product) {
    this.prodottiACarrello.push(prodotto)
  }


}
