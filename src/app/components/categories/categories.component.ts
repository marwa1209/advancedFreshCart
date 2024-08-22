import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/interfaces/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  Categories: Category[] = [];
  ngOnInit(): void {
    this._CategoryService.getAllCategories().subscribe({
      next: (res) => {
        if (res.data) {
          this.Categories = res.data;
        }
      },
    });
  }
  private _CategoryService = inject(CategoryService);
}
