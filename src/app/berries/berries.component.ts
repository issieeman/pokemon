import { Component, OnInit } from '@angular/core';
import { RootObject, PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {

  item: RootObject;

  constructor(private _svc: PokemonService) { }

  ngOnInit() {
 
  }



}
