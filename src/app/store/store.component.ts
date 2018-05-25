import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  showMotor: boolean;
  showTable: boolean;
  
  constructor() { }

  ngOnInit() {
    
  }

  ShowMotor()
  {
    this.showMotor = true;
    this.showTable=true;
    
    console.log(this.showMotor);
  }

  ShowHelmet()
  {
    this.showMotor = false;
    this.showTable=true;
   

  }

}
