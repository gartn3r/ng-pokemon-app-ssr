import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from './pokemons interfaces/pokemonType';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: false
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(value: PokemonType): string {
    return `chip ${value.cssColor}`;
  }

}
