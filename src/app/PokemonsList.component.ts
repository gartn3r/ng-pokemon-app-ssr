import { Component, Input, OnInit, signal } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "pokemonsList",
  standalone: false,
  templateUrl: "PokemonsList.component.html",
  styleUrl: "PokemonsList.component.css",
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  firstPokemon = signal(this.pokemons[0]);
  selectedPokemon: Pokemon;
  @Input("pkmName") poke: string;
  myPokemon: Pokemon;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemons", pokemon.name]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  ngOnInit(): void {
    this.myPokemon = POKEMONS.find((x) => x.name == this.poke)!;
    if (this.myPokemon == null || this.myPokemon == undefined) {
      this.myPokemon = POKEMONS[0];
    }
    console.log(`la valeur est ${this.myPokemon}`);
  }

  GetPokemon(searchedPokemon: string) {
    const pokemon = this.pokemons.find(
      (x) => x.name.toLowerCase() == searchedPokemon.toLowerCase()
    );
    if (pokemon != undefined) {
      this.selectedPokemon = pokemon;
    } else {
      alert(`Ce pokemon n'existe pas`);
    }
  }
}
