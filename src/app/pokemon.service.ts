import { PokemonList, pokemonTypes } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { map, Observable } from 'rxjs';
import { PokemonType } from './pokemons interfaces/pokemonType';

export abstract class IPokemonService {
  abstract getPokemonList(): Observable<PokemonList>;

  abstract getPokemonById(id: number): Observable<Pokemon>;

  abstract getPokemonByName(name: string): Pokemon;

  abstract searchPokemonsByName(searchTerm: string): PokemonList | Observable<PokemonList>;

  abstract getPokemonTypeList(): PokemonType[];

  abstract updatePokemon(pokemonForm: Pokemon): Observable<Pokemon>;

  abstract deletePokemon(pokemonId: number): Observable<void>;

  abstract addPokemon(newPokemon: Omit<Pokemon, 'id'>): Observable<Pokemon>;
}
