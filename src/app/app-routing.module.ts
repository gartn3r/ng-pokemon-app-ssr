import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test.component";
import { PokemonsListComponent } from "./PokemonsList.component";
import { PokemonDetailsComponent } from "./PokemonDetails/PokemonDetails.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "pokemons", component: PokemonsListComponent },
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
