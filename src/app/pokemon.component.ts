import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "fiche-pokemon",
  standalone: false,
  templateUrl: "pokemon.component.html",
  styleUrl: "pokemon.component.css",
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  firstPokemon = this.pokemons[0];
  selectedPokemon: Pokemon;
@Input('pkmName') poke: string;
  myPokemon: Pokemon;

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  ngOnInit(): void {
    this.myPokemon = POKEMONS.find((x) => x.name == this.poke)!;

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
