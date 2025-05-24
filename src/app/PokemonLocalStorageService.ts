import { Observable, of } from 'rxjs';
import { IPokemonService } from './pokemon.service';
import { Pokemon } from './pokemon';
import { PokemonList, POKEMONS, pokemonTypes } from './mock-pokemon-list';
import { PokemonType } from './pokemons interfaces/pokemonType';

export class PokemonLocalStorageService implements IPokemonService {
  private localStorageKey = 'pokemons';
  allPokemons: PokemonList;
  // Initialise les données dans le localStorage si elles n'existent pas encore.
  private initializePokemons(): void {
    const storedPokemons = localStorage.getItem(this.localStorageKey);
    if (!storedPokemons) {
      const initialPokemons: Pokemon[] = POKEMONS;
      localStorage.setItem(this.localStorageKey, JSON.stringify(initialPokemons));
    }
  }

  // Récupère la liste des Pokémons depuis le localStorage.
  private getPokemonsFromStorage(): Pokemon[] {
    this.initializePokemons();
    const pokemons = localStorage.getItem(this.localStorageKey);
    return pokemons ? JSON.parse(pokemons) : [];
  }

  // Sauvegarde la liste des Pokémons dans le localStorage.
  private savePokemonsToStorage(pokemons: Pokemon[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(pokemons));
  }

  // Retourne la liste de tous les Pokémons.
  getPokemonList(): Observable<PokemonList> {
    const pokemons = this.getPokemonsFromStorage();
    return of(pokemons);
  }

  // Retourne le pokémon avec l'identifiant passé en paramètre.
  getPokemonById(id: number): Observable<Pokemon> {
    const pokemons = this.getPokemonsFromStorage();
    const pokemon = pokemons.find(p => p.id === id);
    return of(pokemon!); // Utilise '!' car le pokémon existe toujours.
  }

  // Met à jour un pokémon existant.
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const pokemons = this.getPokemonsFromStorage();
    const index = pokemons.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      pokemons[index] = pokemon;
      this.savePokemonsToStorage(pokemons);
    }
    return of(pokemon);
  }

  // Supprime un pokémon.
  deletePokemon(pokemonId: number): Observable<void> {
    let pokemons = this.getPokemonsFromStorage();
    pokemons = pokemons.filter(p => p.id !== pokemonId);
    this.savePokemonsToStorage(pokemons);
    return of(void 0);
  }

  // Ajoute un pokémon.
  addPokemon(pokemon: Omit<Pokemon, 'id'>): Observable<Pokemon> {
    const pokemons = this.getPokemonsFromStorage();
    const newPokemon: Pokemon = {
      id: pokemons.length + 1,
      ...pokemon,
    };
    pokemons.push(newPokemon);
    this.savePokemonsToStorage(pokemons);
    return of(newPokemon);
  }

  // Retourne la liste des types valides pour un pokémon.
  getPokemonTypeList(): PokemonType[] {
    return pokemonTypes;
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
}
