import { Component, OnInit } from '@angular/core';
import { StoreService, Motor, MotorNoID } from '../services/store.service';

@Component({
  selector: 'app-motor-catalogus',
  templateUrl: './motor-catalogus.component.html',
  styleUrls: ['./motor-catalogus.component.scss']
})
export class MotorCatalogusComponent implements OnInit {


  motors : Motor[];
  motor: MotorNoID;
  brand: string;
  name: string;
  cc: number;
  hp: number;
  price: number;
  id:number;
  page: number;

  constructor(private _svc: StoreService) { }

  ngOnInit() {
    this.GetAllMotors();
    this.page = 0;
  }

  GetAllMotors()
  {
    this._svc.GetMotors().subscribe((res:Motor[])=> {
      this.motors = res;
      console.log(res);
    } )
  }


  DeleteMotor(id:number){
    this._svc.DeleteMotors(id).subscribe(
      res => console.log(res),
      error => console.log(error),
      () => this.GetAllMotors()
    );
    
  }

  //post => formsmodule importeren hier + app.module
  CreateMotor() {
    this.motor = {
      name: this.name,
      brand: this.brand,
      cilinderSize: this.cc,
      horsePower: this.hp,
      price: this.price
    }
    this._svc.PostMotor(this.motor).subscribe();
  }

  UpdateMotor(){
    let motor: Motor;
    motor = {

      id: this.id,
      name: this.motor.name,
      brand: this.motor.brand,
      cilinderSize: this.motor.cilinderSize,
      horsePower: this.motor.horsePower,
      price: this.motor.price
    }

    this._svc.PutMotor(motor).subscribe(res => console.log(res));
  }

  GetMotorToEdit(motor: Motor){
    this.motor = motor;
    this.id = motor.id;
    
    
  }

  GetNext(){
    this.page ++;
    return this._svc.GetPage(this.page).subscribe(res => this.motors = res);
    
  }

  GetPrevious(){
    this.page --;
    return this._svc.GetPage(this.page).subscribe(res => this.motors = res);
    
  }


  log() {
    this.motor = {
      name: this.name,
      brand: this.brand,
      cilinderSize: this.cc,
      horsePower: this.hp,
      price: this.price
    }
    console.log(this.motor);
  }
}
