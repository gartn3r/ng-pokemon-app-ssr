import { Pokemon } from "./pokemon";
import { PokemonType } from "./pokemons interfaces/pokemonType";

export type PokemonList = Pokemon[];

const fireType:PokemonType = { name: "Feu", cssColor: "red lighten-1" };
const waterType:PokemonType = { name: "Eau", cssColor: "blue lighten-1" };
const plantType:PokemonType = { name: "Plante", cssColor: "green lighten-1" };
const insectType:PokemonType = { name: "Insecte", cssColor: "brown lighten-1" };
const normalType:PokemonType = { name: "Normal", cssColor: "grey lighten-3" };
const FlyType:PokemonType = { name: "Vol", cssColor: "blue lighten-3" };
const PoisonType:PokemonType = { name: "Poison", cssColor: "deep-purple accent-1" };
const FeeType:PokemonType = { name: "Fée", cssColor: "pink lighten-4" };
const electrikType:PokemonType = { name: "Electrik", cssColor: "'lime accent-1" };
const psyType:PokemonType = { name: "Psy", cssColor: "deep-purple darken-2" };
const combatType:PokemonType = { name: "Combat", cssColor: "deep-orange" };

export const pokemonTypes: PokemonType[] = [
  fireType,
  waterType,
  plantType,
  insectType,
  normalType,
  FlyType,
  PoisonType,
  FeeType,
  electrikType,
  psyType,
  combatType,];

export function findPokemonTypeByName(name: string): PokemonType | undefined {
  return pokemonTypes.find(t => t.name === name);
}

export const POKEMON_RULES = {
  NAME_PATTERN: /^[a-zA-Zéè]+$/,
  MAX_NAME: 20,
  MIN_NAME: 3,
  MAX_LIFE: 30,
  HIGH_LIFE: 25,
  LOW_LIFE: 15,
  MIN_LIFE: 10,
  MAX_DAMAGE: 10,
  MIN_DAMAGE: 1,
  MIN_TYPES: 1,
  MAX_TYPES: 3,
} as const;
