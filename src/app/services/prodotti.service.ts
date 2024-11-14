import { Injectable } from '@angular/core';
// import { PRODOTTI } from "../data/prodotti";
import { Product } from '../models/prodotto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodottiACarrello: Product[] = [];

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Product[]> {
    return this.http.get<Product[]>("https://fakestoreapi.com/products")

    // return PRODOTTI as Product[];
  }

  getProdottoById(id: string): Observable<Product> {
    return this.http.get<Product>("https://fakestoreapi.com/products/" + id);
  }

  getCategories() {
    return this.http.get<string[]>("https://fakestoreapi.com/products/categories")
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
