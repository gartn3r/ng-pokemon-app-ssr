import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PokemonService } from "./../pokemon.service";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonType } from '../pokemons interfaces/pokemonType';
import { POKEMON_RULES, pokemonTypes } from '../mock-pokemon-list';
import { ErrorMessages } from '../errors/errors-messages'
import { toSignal } from '@angular/core/rxjs-interop';
import { error, log } from 'console';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-pokemon-edit',
  standalone: false,
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {

  constructor() {
    effect(() => {
      const pokemon = this.pokemon();
      if (pokemon) {
        this.form.patchValue({
          name: pokemon.name,
          damage: pokemon.damage,
          hp: pokemon.hp,
          picture: pokemon.picture
        });

        pokemon.types.forEach(type => this.pokemonTypeList.push(new FormControl(type)));
      }

    });

  }

  ngOnInit() {
  }
  readonly errorMessages = ErrorMessages;
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly authService = inject(AuthService);

  readonly pokemonService = inject(PokemonService);
  readonly pokemonId = signal(
    Number(this.route.snapshot.paramMap.get('id'))
  ).asReadonly();
  readonly pokemon = computed(() => this.pokemonResponse()?.value);


  readonly pokemonResponse = toSignal(
    this.pokemonService.getPokemonById(this.pokemonId()).pipe(
      map((pokemon) => ({ value: pokemon, error: undefined })),
      catchError((error) => of({ value: undefined, error: error }))
    )
  );

   deletePokemon(){
   this.pokemonService.deletePokemon(this.pokemonId()).subscribe(()=>{console.log("pokemon bien delete"); this.router.navigate(['/pokemons'])});
   }

   

  readonly error = computed(() => this.pokemonResponse()?.error);


  readonly form = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(POKEMON_RULES.MIN_NAME),
        Validators.maxLength(POKEMON_RULES.MAX_NAME),
        Validators.pattern(POKEMON_RULES.NAME_PATTERN)
      ]),
    hp: new FormControl(0,
      [
        Validators.required,
        Validators.min(POKEMON_RULES.MIN_LIFE + 1),
        Validators.max(POKEMON_RULES.MAX_LIFE - 1)
      ]),
    damage: new FormControl(0,
      [
        Validators.required,
        Validators.min(POKEMON_RULES.MIN_DAMAGE + 1),
        Validators.max(POKEMON_RULES.MAX_DAMAGE - 1)
      ]),
    picture: new FormControl(''),
    types: new FormArray(
      [],
      [
        Validators.required,
        Validators.maxLength(POKEMON_RULES.MAX_TYPES - 1)
      ]
    )
  });

  get pokemonTypeList(): FormArray {
    return this.form.get('types') as FormArray;
  }

  isPokemonTypeSelected(type: PokemonType): boolean {
    return !!this.pokemonTypeList.controls.find((x) => x.value == type);
  }


  onPokemonTypeChange(type: PokemonType, isChecked: boolean) {
    if (isChecked) {
      const newTypeControl = new FormControl(type);
      this.pokemonTypeList.push(newTypeControl);
    }
    else {
      const typeToRemoveIndex = this.pokemonTypeList.controls.map(x => x.value).indexOf(type);
      this.pokemonTypeList.removeAt(typeToRemoveIndex);
    }
  }

  get pokemonName(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get pokemonLife(): FormControl {
    return this.form.get('hp') as FormControl;
  }

  get pokemonDamage(): FormControl {
    return this.form.get('damage') as FormControl;
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
    const currentPokemon = this.pokemon();
    const types = this.pokemonTypeList.value.map((x: PokemonType) => x.name);
    console.log("les types :" + types);
    if (this.form.valid && currentPokemon) {
      const updatedPokemon = {
        ...currentPokemon,
        name: this.pokemonName.value,
        hp: this.pokemonLife.value,
        damage: this.pokemonDamage.value,
        types: types,
      }
      console.log('sa vie : '+this.pokemonLife.value);
      console.log('ce qui va etre push:',updatedPokemon);
      this.pokemonService.updatePokemon(updatedPokemon).subscribe((data) => this.router.navigate(['/pokemon/edit', data.id]));
    }
   
    console.log(this.form.value);
  }
}
