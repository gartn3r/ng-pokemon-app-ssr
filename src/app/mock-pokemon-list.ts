import { Pokemon } from "./pokemon";
import { PokemonType } from "./pokemons interfaces/pokemonType";

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


export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: [plantType, PoisonType],
    created: new Date(),
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: [fireType],
    created: new Date(),
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: [waterType],
    created: new Date(),
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: [insectType,PoisonType],
    created: new Date(),
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: [normalType,FlyType],
    created: new Date(),
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    types: [normalType],
    created: new Date(),
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
    types: [normalType,FlyType],
    created: new Date(),
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: [PoisonType],
    created: new Date(),
  },
  {
    id: 9,
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: [electrikType],
    created: new Date(),
  },
  {
    id: 10,
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: [normalType],
    created: new Date(),
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: [FeeType],
    created: new Date(),
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: [fireType],
    created: new Date(),
  },
];
