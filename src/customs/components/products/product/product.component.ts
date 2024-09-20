import { Component, Input } from '@angular/core';
import { Product } from '../product-types';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  // The '!' tells TypeScript that 'items' will be initialized later
  // 'items' can be undefined or hold a Product
  @Input() items!: Product;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  aboutId!: string;
  paramMapObs: any;
  ngOnInit(): void {
    //this.aboutId = this.activeRoute.snapshot.paramMap.get('name') || '';
    //console.log(this.aboutId);
    //snapshot does not update value but params of paramMap is observable which update the value
    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.aboutId = data.get('name') || '';
    });
    //queryParamMap use to get query string parameter
    this.paramMapObs = this.activeRoute.queryParamMap.subscribe((data) => {
      this.aboutId = data.get('search') || '';
    });
  }
  getDiscountedPrice(item: Product) {
    return item.price - item.discount;
  }
  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
