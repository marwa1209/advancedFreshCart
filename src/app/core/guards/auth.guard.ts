import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('etoken') !== null) {
    return true;
  } else {
    return false;
  }
};
