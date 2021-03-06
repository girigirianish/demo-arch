import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  get(url, queryParams): Observable<any> {
    return this.http.get(url, {
      params: queryParams
    });
  }

}
