import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrl: './prodotto-detail.component.css'
})
export class ProdottoDetailComponent implements OnInit {
  prodotto?: Product;

  constructor(private prodottiService: ProdottiService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;

    this.prodottiService.getProdottoById(id).subscribe(p => {
      this.prodotto = p
    })
  }

  addToCart() {
    this.prodottiService.aggiungiACarrello(this.prodotto!)
  }
}
