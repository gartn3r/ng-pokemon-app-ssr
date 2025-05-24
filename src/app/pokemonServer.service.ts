import { IPokemonService } from './pokemon.service';
import { inject, Inject, Injectable } from '@angular/core';
import { PokemonList, pokemonTypes } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PokemonType } from './pokemons interfaces/pokemonType';

export class PokemonServerService implements IPokemonService {
  readonly #POKEMON_API_URL = 'http://localhost:3000/pokemons';
  readonly #httpClient = inject(HttpClient);
  allPokemons: PokemonList;

  getPokemonList(): Observable<PokemonList> {
    const y = this.#httpClient
      .get<PokemonList>(this.#POKEMON_API_URL)
      .pipe(map(data => data.map(pokemonData => Pokemon.fromJson(pokemonData))));
    console.log(y);
    return y;
  }

  getPokemonById(id: number) {
    const url = `${this.#POKEMON_API_URL}/${id}`;
    const y = this.#httpClient
      .get<Pokemon>(url)
      .pipe(map(pokemonData => Pokemon.fromJson(pokemonData)));
    console.log(y);
    return y;
  }

  getPokemonByName(name: string): Pokemon {
    this.getPokemonList().subscribe(data =>
      data.find(x => x.name.toLowerCase() == name.toLowerCase())
    );
    return this.allPokemons[0];
  }

  searchPokemonsByName(searchTerm: string) {
    if (!searchTerm) {
      return this.getPokemonList();
    }
    this.getPokemonList().subscribe(
      data =>
        (this.allPokemons = data.filter(x =>
          x.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    );
    return this.allPokemons;
  }

  getPokemonTypeList(): PokemonType[] {
    return pokemonTypes.map(x => x);
  }

  updatePokemon(pokemonForm: Pokemon) {
    const y = this.#httpClient.put<Pokemon>(
      this.#POKEMON_API_URL + '/' + pokemonForm.id,
      pokemonForm
    );
    return y;
  }

  deletePokemon(pokemonId: number): Observable<void> {
    return this.#httpClient.delete<void>(this.#POKEMON_API_URL + '/' + pokemonId);
  }

  addPokemon(newPokemon: Omit<Pokemon, 'id'>): Observable<Pokemon> {
    return this.#httpClient.post<Pokemon>(this.#POKEMON_API_URL, newPokemon);
  }
}
