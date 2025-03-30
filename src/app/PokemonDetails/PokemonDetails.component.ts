import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-PokemonDetails",
  standalone:false,
  templateUrl: "./PokemonDetails.component.html",
  styleUrls: ["./PokemonDetails.component.css"],
})
export class PokemonDetailsComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  myPokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let pokemonName = this.route.snapshot.paramMap.get("name");
    if (pokemonName) {
      this.myPokemon = this.pokemons.find((x) => x.name.toLowerCase() == pokemonName.toLowerCase());
    }
  }
}
