import { Component, ContentChild, OnInit, inject } from '@angular/core';
import { Product } from '../product-types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FiltterComponent } from '../../filtter/filtter.component';
import { SearchbarComponent } from '../../searchbar/searchbar.component';
import { SearchDataService } from '../../../services/search-data.service';
import { MypipePipe } from '../../../pipes/mypipe.pipe';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductComponent,
    MatGridListModule,
    FiltterComponent,
    SearchbarComponent,
    MypipePipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  addToCart: number = 0;
  searchText: string = '';

  searchService = inject(SearchDataService);
  ngOnInit() {
    //subscribe to event emitter of service to get data
    this.searchService.OnSearchClicked.subscribe((data: string) => {
      this.searchText = data;
    });
  }
  // @ContentChild(SearchbarComponent) searchText !: SearchbarComponent;
  products: Product[] = [
    {
      pImage: '../../../../favicon.ico',
      name: 'angular',
      price: 999,
      color: 'pink',
      discount: 9,
      inStock: 10,
    },
    {
      pImage: '../../../../favicon.ico',
      name: 'angular1',
      price: 9939,
      color: 'pink',
      discount: 2,
      inStock: 0,
    },
    {
      pImage: '../../../../favicon.ico',
      name: 'angular2',
      price: 99,
      color: 'black',
      discount: 9,
      inStock: 40,
    },
  ];

  decreamentCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
  increamentCartValue(item: Product) {
    if (item.inStock > this.addToCart) {
      this.addToCart++;
    }
  }

  totalProduct = this.products.length;
  totalProductInStock = this.products.filter((p) => p.inStock > 0).length;
  totalProductOutOfStock = this.products.filter((p) => p.inStock === 0).length;
  selectedFilter: string = 'all';

  onFilterChange(event: any) {
    this.selectedFilter = event;
    console.log('in parent', this.selectedFilter);
    console.log('in parent', this.searchText);
  }
}
