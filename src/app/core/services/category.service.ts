import { inject, Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _MainService = inject(MainService);
  getAllCategories(){
    const endpoint:string = 'categories';
    return this._MainService.getRequest(endpoint)
  }
}
