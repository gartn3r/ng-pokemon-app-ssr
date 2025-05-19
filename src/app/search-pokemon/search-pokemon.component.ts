import { Component, computed, inject, Input, OnInit, Signal, signal } from "@angular/core";
import { Pokemon } from "./../pokemon";
import { PokemonList, POKEMONS } from "./../mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { PokemonService } from "./../pokemon.service";

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
  standalone:false
})
export class SearchPokemonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

readonly #pokemonService = inject(PokemonService);

  searchTerm = signal("");
  typeSearchTerm = signal("");

  pokemons = computed(() => 
  {
    if( this.searchTerm() !="")
      {
      return this.#pokemonService.searchPokemonsByName(this.searchTerm())
    }
    else( this.typeSearchTerm() != "" )
    {
      return this.#pokemonService.getPokemonsByType(this.typeSearchTerm())
    }
  });

    selectedPokemon: Pokemon;

    GetPokemon(searchedPokemon: string) {
    const pokemon = this.#pokemonService.getPokemonByName(searchedPokemon);
    if (pokemon != undefined) {
      this.selectedPokemon = pokemon;
    } else {
      alert(`Ce pokemon n'existe pas`);
    }
  }

}

