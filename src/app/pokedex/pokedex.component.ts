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

  //zoekbalk
  searchString:string;

  constructor(private _svc: PokemonService) { }

  ngOnInit() {
    this.GetAllPokemon();
   // this.detailPokemons = new Array<Pokemon>();
   
    

  }

  onNameKeyUp(event:any){
    //console.log(event.target.value);
    this.searchString = event.target.value;
  }

  GetAllPokemon() {
    this._svc.GetPokemon().subscribe((res: RootObject) => {
      this.pokemon = res;
      
    });
  }


  GetNext(next: string) {
    this._svc.GetNext(next).subscribe(result => this.pokemon = result);
  }


  SetPokemon(url: string) {
    this._svc.GetDetailedPokemon(url).subscribe((res: Pokemon) => {
      this.detailPokemon = res;
    });
  }

  SearchPokemon(){
    this._svc.getPokemonBySearch(this.searchString).subscribe((result:Pokemon)=> {
      this.detailPokemon = result;
      console.log(result);
    });
  }





}
