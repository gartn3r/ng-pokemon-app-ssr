/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PokemonServerService } from './pokemonServer.service';

describe('Service: PokemonServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonServerService],
    });
  });

  it('should ...', inject([PokemonServerService], (service: PokemonServerService) => {
    expect(service).toBeTruthy();
  }));
});
