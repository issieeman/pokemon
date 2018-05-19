import { Component, OnInit } from '@angular/core';
import { RootObject, PokemonService, Item } from '../services/pokemon.service';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item: RootObject;
  detailItem: Item;
  constructor(private _svc: PokemonService) { }

  ngOnInit() {
    this.GetAllItem();
    
  }

  GetAllItem(){
    this._svc.GetItem().subscribe((res : RootObject)=>{
      this.item = res;
    })
  }

  GetNext(next: string){
    this._svc.GetNext(next).subscribe(result => this.item = result);
  }

  GetPrev(previous: string){
    this._svc.GetPrev(previous).subscribe(result => this.item = result);
  }

  
  SetItem(url: string){
    this._svc.GetDetailedItem(url).subscribe((res:Item)=>{
      this.detailItem = res;
      console.log(res);
      
    });
  }

}
