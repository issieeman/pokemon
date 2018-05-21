import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import {StoreService} from './services/store.service';
import { DetailviewComponent } from './detailview/detailview.component';
import { ItemComponent } from './item/item.component';
import { ItemdetailviewComponent } from './itemdetailview/itemdetailview.component';
import { TypeComponent } from './type/type.component';
import { TypedetailviewComponent } from './typedetailview/typedetailview.component';
import { MotorCatalogusComponent } from './motor-catalogus/motor-catalogus.component';
import { StoreComponent } from './store/store.component';
import { HelmetCatalogusComponent } from './helmet-catalogus/helmet-catalogus.component'


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    NavBarComponent,
    DetailviewComponent,
    ItemComponent,
    ItemdetailviewComponent,
    TypeComponent,
    TypedetailviewComponent,
    MotorCatalogusComponent,
    StoreComponent,
    HelmetCatalogusComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'pokedex', component: PokedexComponent },
      { path: 'type', component: TypeComponent },
      {path: 'item', component: ItemComponent},
      {path: 'store', component: StoreComponent},
      {path:'', redirectTo: 'pokedex', pathMatch: 'full'}
    ], { useHash: true }),
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PokemonService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
