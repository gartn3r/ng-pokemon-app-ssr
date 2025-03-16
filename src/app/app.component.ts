import { Component } from '@angular/core';
import { PokemonComponent } from './pokemon.component';

@Component({
  selector: 'app-root',
  template: `
   
    <router-outlet />
    <div class="container">
    <h1>{{title}}</h1>
    <fiche-pokemon pkmName="Pikachu"></fiche-pokemon>
  </div>
  `,
  standalone: false,
  styles: [],
})
export class AppComponent {
  title = 'Pokédex';
}
