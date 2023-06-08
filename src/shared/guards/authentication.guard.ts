import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token.service';

export const AuthenticationGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getTokenFromLocalStorage();

  if (!token) return false;
  return true;
};
