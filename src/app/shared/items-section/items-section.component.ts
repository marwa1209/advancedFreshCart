import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { Category } from '../../core/interfaces/category';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';
import { CutTextPipe } from '../../core/pipes/cut-text.pipe';

@Component({
  selector: 'app-items-section',
  standalone: true,
  imports: [RouterLink, FormsModule, StarComponent, CutTextPipe],
templateUrl: './items-section.component.html',
})
export class ItemsSectionComponent  {
  @Input() Items: any[] = [];
  term: string = '';

  AddToCart(id: string) {}
}
