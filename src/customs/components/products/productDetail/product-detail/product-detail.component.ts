import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product-types';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  product!: Product;
  ngOnInit() {
    // this.activeRoute.data.subscribe((data) => {
    //   this.product = data as Product;
    // });
    // this.product = this.router.getCurrentNavigation()?.extras.state;
    this.product = history.state;
  }
}
