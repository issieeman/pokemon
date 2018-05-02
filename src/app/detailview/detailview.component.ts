import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }
}
