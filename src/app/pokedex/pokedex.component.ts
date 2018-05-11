import { Component, OnInit } from '@angular/core';
import { RootObject, Pokemon, Result, PokemonService, Form } from '../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemon: RootObject;
  next: RootObject;
  detailPokemon: Pokemon;
  detailPokemons: Pokemon[];

  constructor(private _svc: PokemonService) { }

  ngOnInit() {
    this.GetAllPokemon();
   // this.detailPokemons = new Array<Pokemon>();
   
    

  }

  GetAllPokemon() {
    this._svc.GetPokemon().subscribe((res: RootObject) => {
      this.pokemon = res;
    });
  }

 /* GetAllDetails() {
    for (let index = 0; index < this.pokemon.results.length; index++) {
      this.GetDetailed(this.pokemon.results[index].url);
    }
  }*/

  GetNext(next: string) {
    this._svc.GetNext(next).subscribe(result => this.pokemon = result);
  }

  /*GetDetailed(forms: string) {
    this._svc.GetDetailedPokemon(forms).subscribe((result: Pokemon) => {
      this.detailPokemons.push(result);
      console.log(result);
    },
      err => console.log(err)
    );
  }*/

  SetPokemon(url: string) {
    this._svc.GetDetailedPokemon(url).subscribe((res: Pokemon) => {
      this.detailPokemon = res;
    });
  }

}
