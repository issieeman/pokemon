import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class PokemonService {

  private _url = 'https://pokeapi.co/api/v2/';
  pokemonStringLimit = 'pokemon/?limit=10&offset=0'; //resource 1
  pokemonString = 'pokemon/'; //resource 1
  itemString = 'item/?limit=10&offset=0' //resource 2
  typeString = 'type'                    //resource3

  

 // Detail: Pokemon;

 // DetailItem : Item;
  constructor(private _http: HttpClient) { }

  /// volgende lijst
  GetNext(url: string): Observable<RootObject> {
    return this._http.get<RootObject>(url);

  }

  ///pokedexcomponent
  GetPokemon(): Observable<RootObject> {
    return this._http.get<RootObject>(this._url+this.pokemonStringLimit);
  }


  GetDetailedPokemon(url: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(url);
  }///einde pokedexcomponent

  /// itemcomponent
  GetItem(): Observable<RootObject>{
    return this._http.get<RootObject>(this._url+this.itemString);
  }

  GetDetailedItem(url:string): Observable<Item>{
    return this._http.get<Item>(url);
  } ///einde itemcomponent

  /// typecomponent
  GetType():Observable<RootObject>{
    return this._http.get<RootObject>(this._url+this.typeString);
  }

  GetDetailedType(url:string):Observable<Type>{
    return this._http.get<Type>(url);
  } ///einde typecomponent

  getPokemonBySearch(name:string):Observable<Pokemon>{
    return this._http.get<Pokemon>(this._url+this.pokemonString+`${name}`)
  }

}



/////begin pokemon resource ////
export interface Result {
  url: string;
  name: string;
}

export interface RootObject {
  count: number;
  previous?: any;
  results: Result[];
  next: string;

}

export interface Form {
  url: string;
  name: string;
}

export interface Ability2 {
  url: string;
  name: string;
}

export interface Ability {
  slot: number;
  is_hidden: boolean;
  ability: Ability2;
}

export interface Stat2 {
  url: string;
  name: string;
}

export interface Stat {
  stat: Stat2;
  effort: number;
  base_stat: number;
}

export interface MoveLearnMethod {
  url: string;
  name: string;
}

export interface VersionGroup {
  url: string;
  name: string;
}

export interface VersionGroupDetail {
  move_learn_method: MoveLearnMethod;
  level_learned_at: number;
  version_group: VersionGroup;
}

export interface Move2 {
  url: string;
  name: string;
}

export interface Move {
  version_group_details: VersionGroupDetail[];
  move: Move2;
}

export interface Sprites {
  back_female?: any;
  back_shiny_female?: any;
  back_default: string;
  front_female?: any;
  front_shiny_female?: any;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Species {
  url: string;
  name: string;
}

export interface Version {
  url: string;
  name: string;
}

export interface GameIndice {
  version: Version;
  game_index: number;
}

export interface Type3 {
  url: string;
  name: string;
}

export interface Type2 {
  slot: number;
  type: Type3;
}

export interface Pokemon {
  forms: Form[];
  abilities: Ability[];
  stats: Stat[];
  name: string;
  weight: number;
  moves: Move[];
  sprites: Sprites;
  held_items: any[];
  location_area_encounters: string;
  height: number;
  is_default: boolean;
  species: Species;
  id: number;
  order: number;
  game_indices: GameIndice[];
  base_experience: number;
  types: Type2[];
}
///einde pokemon resource /////

/// begin items resource ////
export interface Category {
  url: string;
  name: string;
}

export interface Language {
  url: string;
  name: string;
}

export interface EffectEntry {
  short_effect: string;
  effect: string;
  language: Language;
}

export interface Sprites {
  default: string;
}

export interface Generation {
  url: string;
  name: string;
}

export interface GameIndice {
  generation: Generation;
  game_index: number;
}

export interface Language2 {
  url: string;
  name: string;
}

export interface Name {
  name: string;
  language: Language2;
}

export interface Attribute {
  url: string;
  name: string;
}

export interface VersionGroup {
  url: string;
  name: string;
}

export interface Language3 {
  url: string;
  name: string;
}

export interface FlavorTextEntry {
  text: string;
  version_group: VersionGroup;
  language: Language3;
}

export interface Item {
  category: Category;
  name: string;
  fling_effect?: any;
  effect_entries: EffectEntry[];
  held_by_pokemon: any[];
  sprites: Sprites;
  game_indices: GameIndice[];
  baby_trigger_for?: any;
  cost: number;
  names: Name[];
  attributes: Attribute[];
  flavor_text_entries: FlavorTextEntry[];
  id: number;
  machines: any[];
  fling_power?: any;
}
//// einde items resource ////

//// begin types resource ////
export interface Generation {
  url: string;
  name: string;
}

export interface NoDamageFrom {
  url: string;
  name: string;
}

export interface HalfDamageTo {
  url: string;
  name: string;
}

export interface DoubleDamageFrom {
  url: string;
  name: string;
}

export interface NoDamageTo {
  url: string;
  name: string;
}

export interface DamageRelations {
  half_damage_from: any[];
  no_damage_from: NoDamageFrom[];
  half_damage_to: HalfDamageTo[];
  double_damage_from: DoubleDamageFrom[];
  no_damage_to: NoDamageTo[];
  double_damage_to: any[];
}

export interface Generation2 {
  url: string;
  name: string;
}

export interface GameIndice {
  generation: Generation2;
  game_index: number;
}

export interface MoveDamageClass {
  url: string;
  name: string;
}

export interface Move {
  url: string;
  name: string;
}

export interface Pokemon2 {
  url: string;
  name: string;
}

export interface Pokemon {
  slot: number;
  pokemon: Pokemon2;
}

export interface Language {
  url: string;
  name: string;
}

export interface Name {
  name: string;
  language: Language;
}

export interface Type {
  name: string;
  generation: Generation;
  damage_relations: DamageRelations;
  game_indices: GameIndice[];
  move_damage_class: MoveDamageClass;
  moves: Move[];
  pokemon: Pokemon[];
  id: number;
  names: Name[];
}

///// einde types resource ////