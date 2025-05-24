import { Component, computed, ContentChild, contentChild, ElementRef, inject, Input, OnInit, Signal, signal } from "@angular/core";
import { Pokemon } from "./pokemon";
import { PokemonList } from "./mock-pokemon-list";
import { NgOptimizedImage } from "@angular/common";
import { Router } from "@angular/router";
import { IPokemonService } from './pokemon.service';

@Component({
  selector: 'pokemonsList',
  standalone: false,
  templateUrl: 'PokemonsList.component.html',
  styleUrl: 'PokemonsList.component.css',
})
export class PokemonsListComponent implements OnInit {
  readonly #pokemonService = inject(IPokemonService);
  @Input() pokemonsResult: PokemonList;
  @Input('selectedPokemon') selectedPokemon = signal<Pokemon | undefined>(undefined);
  @Input('pkmName') poke: string;
  @ContentChild('labelSearch') labelSearch!: ElementRef;
  readonly activedPokedex = 'oui';

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.name]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
    console.log('la color du contentChild :');
    console.log(this.labelSearch.nativeElement.style.color);
  }
}
