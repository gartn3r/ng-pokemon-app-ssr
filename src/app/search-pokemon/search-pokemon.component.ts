import { Component, computed, inject, OnInit, signal, viewChild } from '@angular/core';
import { Pokemon } from './../pokemon';
import { IPokemonService } from './../pokemon.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../core/auth/auth.service';
import { PokemonsListComponent } from '../PokemonsList.component';

@Component({
  selector: 'search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css'],
  standalone: false,
})
export class SearchPokemonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  readonly #pokemonService = inject(IPokemonService);
  readonly authService = inject(AuthService);
  pokemonListChild = viewChild(PokemonsListComponent);

  searchTerm = signal('');
  typeSearchTerm = signal('');
  resultCount = computed(() => this.pokemonListChild()?.activedPokedex);

  allPokemons = toSignal(this.#pokemonService.getPokemonList(), {
    initialValue: [],
  });

  getPokemonsByType(type: string) {
    if (!type) {
      return this.allPokemons();
    }

    return this.allPokemons().filter(x =>
      x.types.map(y => y.toLowerCase()).includes(type.toLowerCase())
    );
  }

  pokemons = computed(() => {
    if (this.searchTerm() != '') {
      return this.allPokemons().filter(x =>
        x.name.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    } else this.typeSearchTerm() != '';
    {
      return this.getPokemonsByType(this.typeSearchTerm());
    }
  });

  readonly loading = computed(() => {
    this.pokemons.length == 0;
  });

  selectedPokemon: Pokemon;

  searchPokemonByName() {}

  GetPokemon(searchedPokemon: string) {
    const pokemon = this.#pokemonService.getPokemonByName(searchedPokemon);
    if (pokemon != undefined) {
      this.selectedPokemon = pokemon;
    } else {
      alert(`Ce pokemon n'existe pas`);
    }
  }

  ngInit() {
    console.log('loading : ' + this.loading());
  }
}
