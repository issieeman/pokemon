import { Component, OnInit } from '@angular/core';
import { PokemonService, RootObject, Type } from '../services/pokemon.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  type: RootObject;
  detailType: Type;
  constructor(private _svc: PokemonService) { }

  ngOnInit() {
    this.GetAllTypes();
  }

  GetAllTypes(){
    this._svc.GetType().subscribe((res:RootObject)=>{
      this.type = res;
      console.log(res);
    });
  }

  SetType(url:string){
    this._svc.GetDetailedType(url).subscribe((res:Type)=>{
      this.detailType = res;
    });
  }
}
