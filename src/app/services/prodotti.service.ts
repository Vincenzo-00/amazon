import { Injectable } from '@angular/core';
import { PRODOTTI } from "../data/prodotti";
import { Product } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodottiACarrello: Product[] = [];

  constructor(private http: HttpClient) { }

  getProdotti() {
   return this.http.get<Product[]>("https://fakestoreapi.com/products")

    // return PRODOTTI as Product[];
  }

  aggiungiACarrello(prodotto: Product) {
    if (!this.prodottiACarrello.find(p => p.id == prodotto.id)) {
      this.prodottiACarrello.push(prodotto)

    }
  }

  rimuoviDaCarrello(id: number) {
    const p = this.prodottiACarrello.find(p => p.id == id)

    if (p) {
      const i = this.prodottiACarrello.indexOf(p);
      this.prodottiACarrello.splice(i, 1);
    }
  }


}
