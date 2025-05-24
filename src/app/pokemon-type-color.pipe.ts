import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from './pokemons interfaces/pokemonType';
import { pokemonTypes } from './mock-pokemon-list';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: false,
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(value: string): string {
    const type =
      pokemonTypes.find(x => x.name.toLowerCase() == value.toLowerCase()) ?? pokemonTypes[0];
    return `chip ${type.cssColor}`;
  }
}
