import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const SessionIsValidGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getTokenFromLocalStorage();

  if (token) {
    router.navigate(['/books']);
  }
  return true;
};
