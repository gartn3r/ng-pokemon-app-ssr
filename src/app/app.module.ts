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


@NgModule({
  declarations: [			
    AppComponent,
    PokemonsListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    TestRouteComponent,
      PokemonDetailsComponent,
      PageNotFoundComponent,
      SearchPokemonComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
