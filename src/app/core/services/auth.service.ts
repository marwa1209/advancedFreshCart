import { inject, Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _MainService = inject(MainService);

  // Method to handle user signup
  signup(userData: object) {
    const endpoint = 'auth/signup';
    return this._MainService.postRequest(endpoint, userData);
  }

}
