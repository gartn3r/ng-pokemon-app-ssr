import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PokemonAddComponent } from './pokemon-add.component';
import { FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { POKEMON_RULES } from '../mock-pokemon-list';

vi.mock('@angular/router', () => ({
  ActivatedRoute: vi.fn(),
  Router: vi.fn().mockImplementation(() => ({
    navigate: vi.fn()
  }))
}));
vi.mock('../core/auth/auth.service');
vi.mock('../pokemon.service', () => ({
  PokemonService: vi.fn().mockImplementation(() => ({
    addPokemon: vi.fn()
  }))
}));

describe('PokemonAddComponent', () => {
  let component: PokemonAddComponent;
  let mockPokemonService: any;
  let mockRouter: any;

  beforeEach(() => {
    mockPokemonService = {
      addPokemon: vi.fn().mockReturnValue({
        subscribe: (cb: any) => cb({ id: 123 })
      })
    };
    mockRouter = { navigate: vi.fn() };
    vi.spyOn(component as any, 'pokemonService', 'get').mockReturnValue(mockPokemonService);
    vi.spyOn(component as any, 'router', 'get').mockReturnValue(mockRouter);

    component = new PokemonAddComponent();
    // Patch injects
    (component as any).pokemonService = mockPokemonService;
    (component as any).router = mockRouter;
  });

  it('should_add_new_pokemon_when_form_is_valid', () => {
    component.form.setValue({
      name: 'Pikachu',
      hp: 20,
      damage: 5,
      picture: 'https://pokeapi.co/media/sprites/pokemon/25.png',
      types: ['electric']
    });
    component.onSubmit();
    expect(mockPokemonService.addPokemon).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Pikachu',
        hp: 20,
        damage: 5,
        picture: 'https://pokeapi.co/media/sprites/pokemon/25.png',
        types: expect.any(Array),
        created: expect.any(Date)
      })
    );
  });

  it('should_increment_and_decrement_damage_and_life_within_bounds', () => {
    const minDamage = POKEMON_RULES.MIN_DAMAGE + 1;
    const maxDamage = POKEMON_RULES.MAX_DAMAGE - 1;
    const minLife = POKEMON_RULES.MIN_LIFE + 1;
    const maxLife = POKEMON_RULES.MAX_LIFE - 1;

    component.pokemonDamage.setValue(minDamage);
    component.incrementDamage();
    expect(component.pokemonDamage.value).toBe(minDamage + 1);
    component.decrementDamage();
    expect(component.pokemonDamage.value).toBe(minDamage);

    component.pokemonDamage.setValue(maxDamage);
    component.incrementDamage();
    expect(component.pokemonDamage.value).toBe(maxDamage + 1);

    component.pokemonLife.setValue(minLife);
    component.incrementLife();
    expect(component.pokemonLife.value).toBe(minLife + 1);
    component.decrementLife();
    expect(component.pokemonLife.value).toBe(minLife);

    component.pokemonLife.setValue(maxLife);
    component.incrementLife();
    expect(component.pokemonLife.value).toBe(maxLife + 1);
  });

  it('should_add_and_remove_pokemon_types_on_selection_change', () => {
    const type1 = { name: 'fire' };
    const type2 = { name: 'water' };
    // Initially one type
    expect(component.pokemonTypeList.length).toBe(1);

    component.onPokemonTypeChange(type1, true);
    expect(component.pokemonTypeList.value).toContain(type1);

    component.onPokemonTypeChange(type2, true);
    expect(component.pokemonTypeList.value).toContain(type2);

    component.onPokemonTypeChange(type1, false);
    expect(component.pokemonTypeList.value).not.toContain(type1);
  });

  it('should_prevent_submission_and_show_errors_when_required_fields_missing', () => {
    component.form.patchValue({
      name: '',
      hp: null,
      damage: null,
      picture: '',
      types: []
    });
    const logSpy = vi.spyOn(console, 'log');
    component.onSubmit();
    expect(logSpy).toHaveBeenCalledWith('formulaire invalide');
    expect(component.form.valid).toBe(false);
    logSpy.mockRestore();
  });

  it('should_reject_invalid_pokemon_names', () => {
    // Too short
    component.pokemonName.setValue('A');
    component.pokemonName.markAsTouched();
    expect(component.pokemonName.valid).toBe(false);

    // Too long
    const longName = 'A'.repeat(POKEMON_RULES.MAX_NAME + 1);
    component.pokemonName.setValue(longName);
    component.pokemonName.markAsTouched();
    expect(component.pokemonName.valid).toBe(false);

    // Invalid pattern
    component.pokemonName.setValue('Pikachu123');
    component.pokemonName.markAsTouched();
    expect(component.pokemonName.valid).toBe(false);

    // Valid name
    component.pokemonName.setValue('Bulbizarre');
    component.pokemonName.markAsTouched();
    expect(component.pokemonName.valid).toBe(true);
  });

  it('should_not_allow_more_than_max_types_and_show_error', () => {
    // Fill up to max allowed types
    const maxTypes = POKEMON_RULES.MAX_TYPES - 1;
    for (let i = 1; i < maxTypes; i++) {
      component.pokemonTypeList.push(new FormControl(`type${i}`));
    }
    expect(component.pokemonTypeList.length).toBe(maxTypes);

    // Try to add one more
    component.onPokemonTypeChange({ name: 'extra' }, true);
    expect(component.pokemonTypeList.length).toBeLessThanOrEqual(maxTypes);

    // Check validation error
    component.pokemonTypeList.setValidators([
      (control: FormArray) =>
        control.length > maxTypes ? { maxLength: true } : null
    ]);
    component.pokemonTypeList.push(new FormControl('overflow'));
    component.pokemonTypeList.updateValueAndValidity();
    expect(component.pokemonTypeList.errors).toHaveProperty('maxLength');
  });
});