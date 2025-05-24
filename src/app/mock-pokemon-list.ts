import { Pokemon } from './pokemon';
import { PokemonType } from './pokemons interfaces/pokemonType';

export type PokemonList = Pokemon[];

const fireType: PokemonType = { name: 'Feu', cssColor: 'red lighten-1' };
const waterType: PokemonType = { name: 'Eau', cssColor: 'blue lighten-1' };
const plantType: PokemonType = { name: 'Plante', cssColor: 'green lighten-1' };
const insectType: PokemonType = { name: 'Insecte', cssColor: 'brown lighten-1' };
const normalType: PokemonType = { name: 'Normal', cssColor: 'grey lighten-3' };
const FlyType: PokemonType = { name: 'Vol', cssColor: 'blue lighten-3' };
const PoisonType: PokemonType = { name: 'Poison', cssColor: 'deep-purple accent-1' };
const FeeType: PokemonType = { name: 'Fée', cssColor: 'pink lighten-4' };
const electrikType: PokemonType = { name: 'Electrik', cssColor: "'lime accent-1" };
const psyType: PokemonType = { name: 'Psy', cssColor: 'deep-purple darken-2' };
const combatType: PokemonType = { name: 'Combat', cssColor: 'deep-orange' };

export const pokemonTypes: PokemonType[] = [
  normalType,
  fireType,
  waterType,
  plantType,
  insectType,
  FlyType,
  PoisonType,
  FeeType,
  electrikType,
  psyType,
  combatType,
];

export const POKEMONS: PokemonList = [
  {
    id: 1,
    name: 'Bulbizarre',
    hp: 25,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: [plantType.name, PoisonType.name],
    created: new Date(),
  },
  {
    id: 2,
    name: 'Salamèche',
    hp: 28,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: [fireType.name],
    created: new Date(),
  },
  {
    id: 3,
    name: 'Carapuce',
    hp: 21,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: [waterType.name],
    created: new Date(),
  },
  {
    id: 4,
    name: 'Aspicot',
    hp: 16,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    types: [insectType.name, PoisonType.name],
    created: new Date(),
  },
  {
    id: 5,
    name: 'Roucool',
    hp: 30,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    types: [normalType.name, FlyType.name],
    created: new Date(),
  },
  {
    id: 6,
    name: 'Rattata',
    hp: 18,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    types: [normalType.name],
    created: new Date(),
  },
  {
    id: 7,
    name: 'Piafabec',
    hp: 14,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
    types: [normalType.name, FlyType.name],
    created: new Date(),
  },
  {
    id: 8,
    name: 'Abo',
    hp: 16,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
    types: [PoisonType.name],
    created: new Date(),
  },
  {
    id: 9,
    name: 'Pikachu',
    hp: 21,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    types: [electrikType.name],
    created: new Date(),
  },
  {
    id: 10,
    name: 'Sabelette',
    hp: 19,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
    types: [normalType.name],
    created: new Date(),
  },
  {
    id: 11,
    name: 'Mélofée',
    hp: 25,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
    types: [FeeType.name],
    created: new Date(),
  },
  {
    id: 12,
    name: 'Groupix',
    hp: 17,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
    types: [fireType.name],
    created: new Date(),
  },
  // Popular Pokémon additions
  {
    id: 13,
    name: 'Dracaufeu',
    hp: 30,
    damage: 8,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    types: [fireType.name, FlyType.name],
    created: new Date(),
  },
  {
    id: 14,
    name: 'Tortank',
    hp: 30,
    damage: 8,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
    types: [waterType.name],
    created: new Date(),
  },
  {
    id: 15,
    name: 'Florizarre',
    hp: 30,
    damage: 8,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    types: [plantType.name, PoisonType.name],
    created: new Date(),
  },
  {
    id: 16,
    name: 'Rondoudou',
    hp: 22,
    damage: 5,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',
    types: [normalType.name, FeeType.name],
    created: new Date(),
  },
  {
    id: 17,
    name: 'Evoli',
    hp: 20,
    damage: 6,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png',
    types: [normalType.name],
    created: new Date(),
  },
  {
    id: 18,
    name: 'Aquali',
    hp: 28,
    damage: 7,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png',
    types: [waterType.name],
    created: new Date(),
  },
  {
    id: 19,
    name: 'Voltali',
    hp: 26,
    damage: 7,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png',
    types: [electrikType.name],
    created: new Date(),
  },
  {
    id: 20,
    name: 'Pyroli',
    hp: 26,
    damage: 7,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png',
    types: [fireType.name],
    created: new Date(),
  },
  {
    id: 21,
    name: 'Mewtwo',
    hp: 30,
    damage: 10,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png',
    types: [psyType.name],
    created: new Date(),
  },
  {
    id: 22,
    name: 'Mew',
    hp: 30,
    damage: 9,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png',
    types: [psyType.name],
    created: new Date(),
  },
  {
    id: 23,
    name: 'Dracolosse',
    hp: 30,
    damage: 9,
    picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png',
    types: [FlyType.name],
    created: new Date(),
  },
];

export function findPokemonTypeByName(name: string): string {
  return pokemonTypes.find(t => t.name === name)!.name;
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
  PICTURE_URL_PATTERN: /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i,
} as const;
