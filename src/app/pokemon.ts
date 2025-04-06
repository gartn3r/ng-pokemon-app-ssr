import { PokemonType } from "./pokemons interfaces/pokemonType";
export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  damage: number;
  name: string;
  picture: string;
  types: PokemonType[];
  created: Date;
}
