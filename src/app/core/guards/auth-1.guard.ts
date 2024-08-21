import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard1: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('etoken') !== null
  ) {
    _Router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
