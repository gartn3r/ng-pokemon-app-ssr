import { PokemonType } from "./pokemons interfaces/pokemonType";
export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: PokemonType[];
  created: Date;
}
