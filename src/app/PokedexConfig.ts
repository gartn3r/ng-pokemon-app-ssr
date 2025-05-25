import { InjectionToken } from '@angular/core';

export interface PokedexConfig {
  version: string;
}

export const POKEDEX_CONFIG = new InjectionToken<PokedexConfig>('pokedex configuration');

const pokedexConfig: PokedexConfig = {
  version: 'v0.1',
};

export function providePokemonConfig() {
  return { provide: POKEDEX_CONFIG, useValue: pokedexConfig };
}
