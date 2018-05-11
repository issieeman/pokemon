import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  @Input() pokemon: Pokemon;
  front?: boolean;
  constructor() { }

  ngOnInit() {
    this.front = true;
  }

  turn() {
    this.front = !this.front ;
    console.log(this.front);
  }
}
