import { Component, OnInit } from '@angular/core';

import {RootObject, IRootObject, Result, PokemonService, Form} from '../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemon: RootObject;
  next: RootObject;
  detailPokemon : IRootObject;
  detailPokemons:IRootObject[];
  
  constructor( private _svc: PokemonService) { }

  ngOnInit() {
   this.GetAllPokemon()
    
  
    
  }

  GetAllPokemon(){
    this._svc.GetPokemon().subscribe(res =>{
      this.pokemon = res;
      for (let index = 0; index < this.pokemon.results.length; index++) {
       this.GetDetailed(this.pokemon[index].results.url)
        
      }
    
    })
  }

  GetNext(next: string){
    this._svc.GetNext(next).subscribe(result => this.pokemon = result)
   // this._svc.logger(next);
  }

 GetDetailed(forms:string){
   //console.log(forms);
   this._svc.GetDetailed(forms).subscribe(result =>
    { 
      this.detailPokemons.push(result);
      console.log(result);
      
    })
   
   
 }

}
