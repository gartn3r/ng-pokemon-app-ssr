import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test.component";
import { PokemonsListComponent } from "./PokemonsList.component";
import { PokemonDetailsComponent } from "./PokemonDetails/PokemonDetails.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { PokemonEditComponent } from "./pokemon-edit/pokemon-edit.component";

const routes: Routes = [
  {path: "pokemon/edit/:id", component: PokemonEditComponent,title: "Edit Pokemon"},
  { path: "pokemons", component: SearchPokemonComponent },
  { path: "test", component: TestComponent },
  { path: "pokemons/:name", component: PokemonDetailsComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
