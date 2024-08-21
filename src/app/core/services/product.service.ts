import { inject, Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _MainService = inject(MainService);
  getAllProducts(){
    const endpoint:string = 'products';
    return this._MainService.getRequest(endpoint)
  }
}
