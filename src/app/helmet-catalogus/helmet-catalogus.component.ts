import { Component, OnInit } from '@angular/core';
import { StoreService, Helmet } from '../services/store.service';

@Component({
  selector: 'app-helmet-catalogus',
  templateUrl: './helmet-catalogus.component.html',
  styleUrls: ['./helmet-catalogus.component.scss']
})
export class HelmetCatalogusComponent implements OnInit {

  helmets : Helmet[];
  constructor(private _svc: StoreService) { }

  ngOnInit() {
    this.GetAllHelmets();
  }

  GetAllHelmets()
  {
    this._svc.GetHelmets().subscribe((res:Helmet[])=> {
      this.helmets = res;
      console.log(res);
    } )
  }

}
