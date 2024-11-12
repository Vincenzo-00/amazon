import { Component, Input } from '@angular/core';
import { Product } from '../../models/prodotto';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-prodotti-preview',
  templateUrl: './prodotti-preview.component.html',
  styleUrl: './prodotti-preview.component.css'
})
export class ProdottiPreviewComponent {

  @Input()
  prodotto?: Product;

  constructor(public prodottiService: ProdottiService) {

  }

}
