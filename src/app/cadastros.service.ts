import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {
  private _url:string = "https://private-f91e8-optimusbrasil.apiary-mock.com/users";
  initData: any[];
  constructor(private http: HttpClient) { }
  getCadastrosPre(): Observable<any>{
    return this.http.get(this._url);
  }
}
