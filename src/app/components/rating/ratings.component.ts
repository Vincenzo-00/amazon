import { Component, Input } from '@angular/core';
import { Product, Rating } from '../../models/prodotto';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css'
})
export class RatingsComponent {

  @Input()
  rating?: Rating;

}
