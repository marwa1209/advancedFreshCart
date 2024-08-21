import { Component, inject, OnInit } from '@angular/core';
import { ItemsSectionComponent } from '../../shared/items-section/items-section.component';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/interfaces/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ItemsSectionComponent],
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
