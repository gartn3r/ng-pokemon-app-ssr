import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './PokemonsList.component';
import { BorderCardDirective } from './border-card.directive';
import { NgOptimizedImage } from '@angular/common';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { TestRouteComponent } from './test-route/test-route.component';
import { PokemonDetailsComponent } from './PokemonDetails/PokemonDetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderPokemonComponent } from './header-pokemon/header-pokemon.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { CardAddPokemonComponent } from './card-add-pokemon/card-add-pokemon.component';
import { IPokemonService } from './pokemon.service';
import { environment } from '../environments/environment';
import { PokemonLocalStorageService } from './PokemonLocalStorageService';
import { PokemonServerService } from './pokemonServer.service';
import { InjectionToken } from '@angular/core';
import { PokedexConfig, providePokemonConfig } from './PokedexConfig';

export function pokemonServiceFactory(): IPokemonService {
  return environment.production ? new PokemonLocalStorageService() : new PokemonServerService();
}

export function providePokemonService() {
  return { provide: IPokemonService, useFactory: pokemonServiceFactory };
}

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    TestRouteComponent,
    PokemonDetailsComponent,
    PageNotFoundComponent,
    SearchPokemonComponent,
    PokemonEditComponent,
    LoginComponent,
    HeaderPokemonComponent,
    PokemonAddComponent,
    CardAddPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    providePokemonService(),
    providePokemonConfig(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
