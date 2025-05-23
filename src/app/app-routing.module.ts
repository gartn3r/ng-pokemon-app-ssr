import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test.component";
import { PokemonsListComponent } from "./PokemonsList.component";
import { PokemonDetailsComponent } from "./PokemonDetails/PokemonDetails.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { PokemonEditComponent } from "./pokemon-edit/pokemon-edit.component";
import { AuthGuard } from "./core/auth/auth.guard";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "pokemons",
    children:
      [
        { path: "edit/:id", component: PokemonEditComponent, title: "Edit Pokemon",canActivate: [AuthGuard] },
        { path: ":name", component: SearchPokemonComponent, title: "Edit Pokemon" },
        { path: "", component: SearchPokemonComponent, title: "Edit Pokemon" },
      ]
  },
  { path: "test", component: TestComponent },
  { path: "", redirectTo: "/pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
