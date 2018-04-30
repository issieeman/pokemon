import { Component, OnInit,Input } from '@angular/core';
import { IRootObject } from '../services/pokemon.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() pokemon:IRootObject;

}
