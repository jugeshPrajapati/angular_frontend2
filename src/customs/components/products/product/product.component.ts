import { Component, Input } from '@angular/core';
import { Product } from '../product-types';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // The '!' tells TypeScript that 'items' will be initialized later
  // 'items' can be undefined or hold a Product
  @Input() items !:  Product;
  getDiscountedPrice(item:Product){
    return item.price - item.discount
  }
}
