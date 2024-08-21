import { inject, Injectable } from '@angular/core';
import { MainService } from './main.service';
import { jwtDecode } from 'jwt-decode';
import { UserInfo } from '../interfaces/user-info';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userInfo: UserInfo | null = null;

  private _MainService = inject(MainService);
  private _Router = inject(Router);

  // Method to handle user signup
  signup(userData: object) {
    const endpoint = 'auth/signup';
    return this._MainService.postRequest(endpoint, userData);
  }
  // Method to handle user signin
  signin(userData: object) {
    const endpoint = 'auth/signin';
    return this._MainService.postRequest(endpoint, userData);
  }
  // Method to handle user signout
  signout() {
    localStorage.removeItem('etoken');
    this.userInfo = null;
    this._Router.navigate(['/login']);
  }
  decodeUser(): void {
    const token = localStorage.getItem('etoken');
    if (token != null) {
      const decode = jwtDecode<UserInfo>(token);
      this.userInfo = decode;
    }
  }
}
