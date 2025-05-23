import { Injectable, signal } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    readonly #isAuthentified = signal(false);
    readonly isAuthentified = this.#isAuthentified.asReadonly();

    login(username: string, password: string): Observable<boolean> {
        const loggedIn = username == "pikachu" && password == "pikachu";
        this.#isAuthentified.set(true);
        console.log('login ' +this.#isAuthentified() );
        return of(loggedIn);
    }

    logout() {
        this.#isAuthentified.set(false);
    }
}