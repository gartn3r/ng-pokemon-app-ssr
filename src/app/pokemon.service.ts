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
    const pokemon = POKEMONS.find((x) => x.id == id);

    if(!pokemon) {
      throw new Error("Pokemon not found");
    }
    return pokemon;
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

  getPokemonsByType(type: string){
    if (!type) {
      return POKEMONS;
    }

    console.log(POKEMONS.map(x=>x.types));

    return POKEMONS.filter((x)=>x.types.map(y=>y.name.toLowerCase()).includes(type.toLowerCase()));
  }
}
