import { Component, OnInit } from '@angular/core';
import { StoreService, Motor } from '../services/store.service';

@Component({
  selector: 'app-motor-catalogus',
  templateUrl: './motor-catalogus.component.html',
  styleUrls: ['./motor-catalogus.component.scss']
})
export class MotorCatalogusComponent implements OnInit {

  motors : Motor[];
  constructor(private _svc: StoreService) { }

  ngOnInit() {
    this.GetAllMotors();
  }

  GetAllMotors()
  {
    this._svc.GetMotors().subscribe((res:Motor[])=> {
      this.motors = res;
      console.log(res);
    } )
  }


  DeleteMotor(id){
    this._svc.DeleteMotors(id).subscribe((res:Motor[]) =>{
      this.motors = res
      console.log(res);
    })
  }

}
