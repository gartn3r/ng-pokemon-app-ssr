import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const AuthGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    const router = inject(Router);
    console.log("appel AuthGuard, est connecté : " + authService.isAuthentified());
    if (!authService.isAuthentified()) {
        console.log("AuthGuard va renvoyer false");

        router.navigate(['/login']);
        return false;
    }
    console.log("AuthGuard va renvoyer true");
    return true;

}