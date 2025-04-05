import { Component, computed, Input, OnInit, signal } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-PokemonDetails",
  standalone: false,
  templateUrl: "./PokemonDetails.component.html",
  styleUrls: ["./PokemonDetails.component.css"],
})
export class PokemonDetailsComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  myPokemon: Pokemon | undefined;
  @Input() PkmName = "";
  Hp = signal(9);
  fullHp = computed(() => this.Hp() * 1000);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let pokemonName = this.route.snapshot.paramMap.get("name");
    if (this.PkmName != "") {
      pokemonName = this.PkmName;
    }
    if (pokemonName) {
      this.myPokemon = this.pokemons.find(
        (x) => x.name.toLowerCase() == pokemonName.toLowerCase()
      );
    }
  }

  goToPokedex() {
    this.router.navigate(["/pokemons"]);
  }
}
