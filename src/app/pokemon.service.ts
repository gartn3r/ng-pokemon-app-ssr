import { Injectable } from "@angular/core";
import { PokemonList, POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  getPokemonList() {
    return POKEMONS;
  }

  getPokemonById(id: number) {
    return POKEMONS.find((x) => x.id == id);
  }

  getPokemonByName(name: string) {
    return POKEMONS.find((x) => x.name.toLowerCase() == name.toLowerCase());
  }

  searchPokemonsByName(searchTerm: string){
    if (!searchTerm) {
      return POKEMONS;
    }

    return POKEMONS.filter((x) => x.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
