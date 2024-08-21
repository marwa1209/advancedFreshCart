import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductService } from '../../core/services/product.service';
import { ItemsSectionComponent } from '../../shared/items-section/items-section.component';
import { CategoryService } from '../../core/services/category.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ItemsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private _ProductService = inject(ProductService);
  private _CategoryService = inject(CategoryService);
  Products: Product[] = [];
  message: string = '';
  term: string = '';
  ngOnInit() {
        this._CategoryService.getAllCategories().subscribe({
          next: (res) => {
            if (res.data) {
console.log(res.data)            }
          },
          error: () => {
            this.message = 'SomeThing Went wrong';
          },
        });
    this._ProductService.getAllProducts().subscribe({
      next: (res) => {
        if (res.data) {
          this.Products = res.data.slice(0, 18);
        }
      },
      error: () => {
        this.message = 'SomeThing Went wrong';
      },
    });
  }
}
