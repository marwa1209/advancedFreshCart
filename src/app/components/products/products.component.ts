import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/interfaces/product';
import {  ProductsSectionComponent } from '../../shared/items-section/products-section.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsSectionComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private _ProductService = inject(ProductService);
  Products: Product[] = [];
  message: string = '';
  term: string = '';
  ngOnInit() {
    this._ProductService.getAllProducts().subscribe({
      next: (res) => {
        if (res.data) {
          this.Products = res.data;
        }
      },
      error: () => {
        this.message = 'SomeThing Went wrong';
      },
    });
  }
  AddToCart(id: string) {}
}
