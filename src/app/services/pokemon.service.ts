import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  private _url = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0';
  //result: Result[];
  Detail: Pokemon;
  constructor(private _http: HttpClient) { }

  GetPokemon(): Observable<RootObject> {
    return this._http.get<RootObject>(this._url);
  }

  GetNext(url: string): Observable<RootObject> {
    return this._http.get<RootObject>(url);

  }

  GetDetailed(url: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(url);
  }

}

export interface Result {
  url: string;
  name: string;
  detail: Pokemon;
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

export interface Type2 {
  url: string;
  name: string;
}

export interface Type {
  slot: number;
  type: Type2;
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
  types: Type[];
}
