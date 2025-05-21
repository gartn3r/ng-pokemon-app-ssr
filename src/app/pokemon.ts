import { findPokemonTypeByName } from "./mock-pokemon-list";
import { PokemonType } from "./pokemons interfaces/pokemonType";
export class Pokemon {
   constructor(
    public id: number,
    public name: string,
    public hp: number,
    public damage: number,
    public picture: string,
    public types: PokemonType[],
    public created: Date,
    cp: number
  ) {}

  static fromJson(json: any): Pokemon {
    return new Pokemon(
      json.id,
      json.name,
      json.life,
      json.damage,
      json.picture,
     
      json.types.map((typeName: string) => {
        const type = findPokemonTypeByName(typeName);
        if (!type) {
          throw new Error(`Unknown Pokemon type: ${typeName}`);
        }
        return type;
      }),
      new Date(json.created),
       json.cp
    );
  }
}