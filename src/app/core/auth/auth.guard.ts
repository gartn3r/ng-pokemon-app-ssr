import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const AuthGuard: CanActivateFn = () => {
    return true;
    const authService = inject(AuthService);
    const router = inject(Router);
    if (!authService.isAuthentified()) {
      router.navigate(['/login']);
      return false;
    }
    return true;
}