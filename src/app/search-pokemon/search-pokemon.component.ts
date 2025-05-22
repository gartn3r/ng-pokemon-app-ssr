import { Component, computed, inject, Input, OnInit, Signal, signal } from "@angular/core";
import { Pokemon } from "./../pokemon";
import { PokemonList } from "./../mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { PokemonService } from "./../pokemon.service";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
  standalone: false
})
export class SearchPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readonly #pokemonService = inject(PokemonService);

  searchTerm = signal("");
  typeSearchTerm = signal("");

  allPokemons = toSignal(this.#pokemonService.getPokemonList(), { initialValue: [] });

  getPokemonsByType(type: string) {
    if (!type) {
      return this.allPokemons();
    }

    return this.allPokemons().filter(x=> x.types.map(y => y.name.toLowerCase()).includes(type.toLowerCase()));
  }

  pokemons = computed(() => {
    console.log("refresh pokemons");
    if (this.searchTerm() != "") {
      console.log("recherche avec searchTerm ");
console.log(this.allPokemons().filter((x) => x.name.toLowerCase().includes(this.searchTerm().toLowerCase())))
      return this.allPokemons().filter((x) => x.name.toLowerCase().includes(this.searchTerm().toLowerCase()))
    }
    else (this.typeSearchTerm() != "")
    {
      console.log("recherche avec typeSearchTerm ");

      return this.getPokemonsByType(this.typeSearchTerm())
    }
  });

  readonly loading = computed(() => { this.pokemons.length == 0 });

  selectedPokemon: Pokemon;

  searchPokemonByName(){
    
  }

  GetPokemon(searchedPokemon: string) {
    const pokemon = this.#pokemonService.getPokemonByName(searchedPokemon);
    if (pokemon != undefined) {
      this.selectedPokemon = pokemon;
    } else {
      alert(`Ce pokemon n'existe pas`);
    }
  }

  ngInit() {
    console.log("loading : " + this.loading());
  }

}

