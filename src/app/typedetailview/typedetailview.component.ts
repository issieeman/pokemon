import { Component, OnInit, Input } from '@angular/core';
import {Type} from '../services/pokemon.service';
@Component({
  selector: 'app-typedetailview',
  templateUrl: './typedetailview.component.html',
  styleUrls: ['./typedetailview.component.scss']
})
export class TypedetailviewComponent implements OnInit {
  @Input() type:Type;
  constructor() { }

  ngOnInit() {
  }

}
