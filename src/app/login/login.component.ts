import { Component, effect, inject, signal } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {


  readonly authService = inject(AuthService);
  readonly router = inject(Router);
  readonly error = signal('');

  readonly loginForm = new FormGroup(
    {
      username: new FormControl('pikachu', [Validators.required]),
      password: new FormControl('pikachu', [Validators.required])
    }
  );

  getUsernameForm(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  getPasswordForm(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(event: Event) {
    console.log("mauvais id 1");

    event.preventDefault();

    const y = this.loginForm;
    console.log(y);
    if (this.loginForm.valid) {
      console.log("form valide");
      const loggin = this.authService.login(
        this.getUsernameForm().value,
        this.getPasswordForm().value
      )
        .subscribe((loggedIn) => {
          if (!loggedIn) {
            this.error.set("Les identifiants sont incorrect, veuillez reessayer...");
            return;
          }
          this.error.set("");
          this.router.navigate(['/pokemons']);

        }
        );


    }
    else {
      console.log("form invalide");


    }
  }

}
