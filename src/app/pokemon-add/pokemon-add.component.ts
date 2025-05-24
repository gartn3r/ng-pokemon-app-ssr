import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { POKEMON_RULES, pokemonTypes } from '../mock-pokemon-list';
import { PokemonType } from '../pokemons interfaces/pokemonType';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { PokemonService } from '../pokemon.service';
import { ErrorMessages } from '../errors/errors-messages';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pokemon-add',
  standalone: false,
  templateUrl: './pokemon-add.component.html',
  styleUrls: ['./pokemon-add.component.css'],
})
export class PokemonAddComponent implements OnInit {
  constructor() {}

  readonly errorMessages = ErrorMessages;
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly authService = inject(AuthService);

  readonly pokemonService = inject(PokemonService);

  readonly form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(POKEMON_RULES.MIN_NAME),
      Validators.maxLength(POKEMON_RULES.MAX_NAME),
      Validators.pattern(POKEMON_RULES.NAME_PATTERN),
    ]),
    hp: new FormControl(10, [
      Validators.required,
      Validators.min(POKEMON_RULES.MIN_LIFE + 1),
      Validators.max(POKEMON_RULES.MAX_LIFE - 1),
    ]),
    damage: new FormControl(5, [
      Validators.required,
      Validators.min(POKEMON_RULES.MIN_DAMAGE + 1),
      Validators.max(POKEMON_RULES.MAX_DAMAGE - 1),
    ]),
    picture: new FormControl('', [
      Validators.required,
      Validators.pattern(POKEMON_RULES.PICTURE_URL_PATTERN),
    ]),
    types: new FormArray(
      [new FormControl(pokemonTypes[0])],
      [Validators.required, Validators.maxLength(POKEMON_RULES.MAX_TYPES - 1)]
    ),
  });

  get pokemonName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get pokemonLife(): FormControl {
    return this.form.get('hp') as FormControl;
  }

  get pokemonDamage(): FormControl {
    return this.form.get('damage') as FormControl;
  }

  get pokemonPicture(): FormControl {
    return this.form.get('picture') as FormControl;
  }

  get pokemonTypeList(): FormArray {
    return this.form.get('types') as FormArray;
  }

  isPokemonTypeSelected(type: PokemonType): boolean {
    return !!this.pokemonTypeList.controls.find(x => x.value == type);
  }

  onPokemonTypeChange(type: PokemonType, isChecked: boolean) {
    if (isChecked) {
      const newTypeControl = new FormControl(type);
      this.pokemonTypeList.push(newTypeControl);
    } else {
      const typeToRemoveIndex = this.pokemonTypeList.controls.map(x => x.value).indexOf(type);
      this.pokemonTypeList.removeAt(typeToRemoveIndex);
    }
    console.log(this.pokemonTypeList);
  }

  incrementDamage() {
    const newDamage = this.pokemonDamage.value + 1;
    this.pokemonDamage.setValue(newDamage);
  }

  decrementDamage() {
    const newDamage = this.pokemonDamage.value - 1;
    this.pokemonDamage.setValue(newDamage);
  }

  incrementLife() {
    const newLife = this.pokemonLife.value + 1;
    this.pokemonLife.setValue(newLife);
  }

  decrementLife() {
    const newLife = this.pokemonLife.value - 1;
    this.pokemonLife.setValue(newLife);
  }

  onSubmit() {
    console.log(this.form.valid);
    if (this.form.valid) {
      console.log('creation en cours...');
      const newPokemon = {
        name: this.pokemonName.value,
        hp: this.pokemonLife.value,
        damage: this.pokemonDamage.value,
        picture: this.pokemonPicture.value,
        types: this.pokemonTypeList.value.map((x: PokemonType) => x.name),
        created: new Date(),
      };
      const addPokemonRequest = this.pokemonService.addPokemon(newPokemon).subscribe(pokemon => {
        this.router.navigate(['/pokemons']);
      });
    } else {
    }
  }

  ngOnInit() {}
}
