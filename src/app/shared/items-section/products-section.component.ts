import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';
import { CutTextPipe } from '../../core/pipes/cut-text.pipe';
import { ButtonComponent } from '../button/button.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [RouterLink, FormsModule, StarComponent, CutTextPipe,ButtonComponent,SkeletonComponent],
  templateUrl: './products-section.component.html',
})
export class ProductsSectionComponent{
  @Input() Items: Product[] = [];
  term: string = '';

  AddToCart(id: string) {
    console.log(id)
  }
}
