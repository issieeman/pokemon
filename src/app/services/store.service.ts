import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StoreService {

  private _url = 'http://localhost:5000/api/v1/'
  motorString = 'motors/';
  helmetString = "helmets/";
  pageString = '?page='

  private header = new HttpHeaders().set('Access-Control-Allow-Origin','*');

  constructor( private _http: HttpClient) { }

  
  GetMotors(): Observable<Motor[]>
  {
    console.log(this._url+this.motorString);
    return this._http.get<Motor[]>(this._url+this.motorString, {headers:this.header});
  }

  GetHelmets(): Observable<Helmet[]>
  {
    return this._http.get<Helmet[]>(this._url+this.helmetString, {headers:this.header});
  }

  DeleteMotors(id: number) : Observable<Motor>
  {
    return this._http.delete<Motor>(this._url+this.motorString+id, {headers:this.header});
  }

  PostMotor(motor:MotorNoID): Observable<MotorNoID> {
    return this._http.post<MotorNoID>(this._url + this.motorString,motor, {headers: this.header});
  }

  PutMotor(motor:Motor): Observable<Motor>
  {
    return this._http.put<Motor>(this._url+this.motorString, motor, {headers:this.header});
  }

  GetPage(page: number): Observable<Motor[]> {
    console.log(this._url + this.motorString + this.pageString + page)
    return this._http.get<Motor[]>(this._url + this.motorString + this.pageString + page, {headers:this.header});

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

export interface MotorNoID
{
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