import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../services/pokemon.service';

@Component({
  selector: 'app-itemdetailview',
  templateUrl: './itemdetailview.component.html',
  styleUrls: ['./itemdetailview.component.scss']
})
export class ItemdetailviewComponent implements OnInit {
  @Input() item:Item;
  constructor() { }

  ngOnInit() {
  }

}
