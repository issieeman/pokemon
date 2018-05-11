import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { DetailviewComponent } from './detailview/detailview.component';
import { BerriesComponent } from './berries/berries.component';
import { ItemComponent } from './item/item.component';
import { ItemdetailviewComponent } from './itemdetailview/itemdetailview.component'

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    NavBarComponent,
    DetailviewComponent,
    BerriesComponent,
    ItemComponent,
    ItemdetailviewComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'pokedex', component: PokedexComponent },
      {path:'berries', component:BerriesComponent },
      {path: 'item', component: ItemComponent},
      {path:'', redirectTo: 'pokedex', pathMatch: 'full'}
    ], { useHash: true }),
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
