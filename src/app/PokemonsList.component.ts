import { Component, computed, inject, Input, OnInit, signal } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { PokemonService } from "./pokemon.service";

@Component({
  selector: "pokemonsList",
  standalone: false,
  templateUrl: "PokemonsList.component.html",
  styleUrl: "PokemonsList.component.css",
})
export class PokemonsListComponent implements OnInit {
  readonly #pokemonService = inject(PokemonService);

  searchTerm = signal("");

  pokemons = computed(() => this.#pokemonService.searchPokemonsByName(this.searchTerm()));
  firstPokemon = signal(this.pokemons()[0]);
  selectedPokemon: Pokemon;
  @Input("pkmName") poke: string;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.name]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  ngOnInit(): void {
 
  }

  GetPokemon(searchedPokemon: string) {
    const pokemon = this.#pokemonService.getPokemonByName(searchedPokemon);
    if (pokemon != undefined) {
      this.selectedPokemon = pokemon;
    } else {
      alert(`Ce pokemon n'existe pas`);
    }
  }
}
