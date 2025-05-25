import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-pokemon',
  standalone: false,

  template: `
    <nav class="nav-wrapper teal deep-orange accent-4 center-align">
      <a
        *ngIf="isLogged()"
        (click)="logout()"
        href="#"
        class="btn-flat waves-effect waves-light right"
        style="background: transparent; box-shadow: none; margin-top: 10px;">
        <i class="material-icons">power_settings_new</i> Disconnect
      </a>
      <span
        href="#"
        class="brand-logo center pokefont white-text"
        style="font-family: 'MyCustomFont';font-size: 42px;">
        {{ title }}
      </span>
    </nav>
  `,
  styles: ``,
})
export class HeaderPokemonComponent {
  @Input('title') title: string;
  readonly authService = inject(AuthService);
  readonly router = inject(Router);
  readonly isLogged = this.authService.isAuthentified;
  logout() {
    this.authService.logout();
    this.router.navigateByUrl(this.router.url);
  }
}
