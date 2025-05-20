import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from "./../pokemon.service";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PokemonType } from '../pokemons interfaces/pokemonType';
import { POKEMON_RULES } from '../mock-pokemon-list';
import { ErrorMessages } from '../errors/errors-messages'

@Component({
  selector: 'app-pokemon-edit',
  standalone: false,
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  readonly errorMessages = ErrorMessages;
  readonly route = inject(ActivatedRoute);
  readonly pokemonService = inject(PokemonService);
  readonly pokemonId = signal(
    Number(this.route.snapshot.paramMap.get('id'))
  ).asReadonly();
  readonly pokemon = signal(
    this.pokemonService.getPokemonById(this.pokemonId())
  ).asReadonly();

  readonly form = new FormGroup({
    name:new FormControl(this.pokemon().name,
    [
      Validators.required,
      Validators.minLength(POKEMON_RULES.MIN_NAME),
      Validators.maxLength(POKEMON_RULES.MAX_NAME),
      Validators.pattern(POKEMON_RULES.NAME_PATTERN)
    ]),
    hp:new FormControl(this.pokemon().hp,
    [
      Validators.required,
      Validators.min(POKEMON_RULES.MIN_LIFE+1),
      Validators.max(POKEMON_RULES.MAX_LIFE-1)
    ]),
    damage:new FormControl(this.pokemon().damage,
    [
      Validators.required,
      Validators.min(POKEMON_RULES.MIN_DAMAGE+1),
      Validators.max(POKEMON_RULES.MAX_DAMAGE-1)
    ]),
    picture:new FormControl(this.pokemon().picture),
    types:new FormArray(this.pokemon().types.map(x=>new FormControl(x)),
    [
      Validators.required,
      Validators.maxLength(POKEMON_RULES.MAX_TYPES-1)
    ])
  });

  get pokemonTypeList(): FormArray{
    return this.form.get('types') as FormArray;
  }

  isPokemonTypeSelected(type: PokemonType): boolean {
    return !!this.pokemonTypeList.controls.find((x) => x.value == type);
  }


  onPokemonTypeChange(type: PokemonType, isChecked: boolean){
    if(isChecked){
      const newTypeControl = new FormControl(type);
      this.pokemonTypeList.push(newTypeControl);
    }
    else{
      const typeToRemoveIndex = this.pokemonTypeList.controls.map(x=>x.value).indexOf(type);
      this.pokemonTypeList.removeAt(typeToRemoveIndex);
    }
  }

  get pokemonName(): FormControl{
    return this.form.get('name') as FormControl;
  }

  get pokemonLife(): FormControl{
    return this.form.get('hp') as FormControl;
  }

  get pokemonDamage(): FormControl{
    return this.form.get('damage') as FormControl;
  }


  incrementDamage(){
    const newDamage = this.pokemonDamage.value + 1;
    this.pokemonDamage.setValue(newDamage);
  }

  decrementDamage(){
    const newDamage = this.pokemonDamage.value - 1;
    this.pokemonDamage.setValue(newDamage);
  }

  incrementLife(){
    const newLife = this.pokemonLife.value + 1;
    this.pokemonLife.setValue(newLife);
  }

  decrementLife(){
    const newLife = this.pokemonLife.value - 1;
    this.pokemonLife.setValue(newLife);
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
