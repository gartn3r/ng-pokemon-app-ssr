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
import { HttpClient } from "@angular/common/http";
import { provideHttpClient } from '@angular/common/http';





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
      PokemonEditComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
