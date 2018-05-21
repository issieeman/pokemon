import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreService {

  private _url = 'http://localhost:5000/api/v1/'
  motorString = 'motors';
  helmetString = "helmets";

  constructor( private _http: HttpClient) { }

  GetMotors(): Observable<Motor[]>
  {
    return this._http.get<Motor[]>(this._url+this.motorString);
  }

  GetHelmets(): Observable<Helmet[]>
  {
    return this._http.get<Helmet[]>(this._url+this.helmetString);
  }

}

export interface Motor
{
  id: number;
  brand : string;
  name: String;
  cilinderSize:number;
  horsePower:number;
  price : number;
}

export interface Helmet
{
  id: number;
  brand: string;
  name : string;
  type: string;
  color: string;
  price: number;
}