import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this._http.get(url);
  }
}
