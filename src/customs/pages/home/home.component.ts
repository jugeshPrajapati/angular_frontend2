import { Component, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProductListComponent } from '../../components/products/product-list/product-list.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.activeRoute.fragment.subscribe((data) => {
      this.jumpToSection(data);
      console.log('fragment section', data);
    });
  }
  jumpToSection(section: any) {
    this.document
      .getElementById(section)
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
