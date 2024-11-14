import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  categories: string[] = [];
  constructor(private prodottiService: ProdottiService) { }

  ngOnInit(): void {
    this.prodottiService.getCategories()
      .subscribe(cats => (this.categories = cats));
  }
}
