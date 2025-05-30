import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { IPokemonService } from './pokemon.service';
import { environment } from '../environments/environment';
import { PokemonLocalStorageService } from './PokemonLocalStorageService';
import { PokemonServerService } from './pokemonServer.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
