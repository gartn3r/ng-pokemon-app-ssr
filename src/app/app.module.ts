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

@NgModule({
  declarations: [	
    AppComponent,
    PokemonsListComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    TestRouteComponent,
      PokemonDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
