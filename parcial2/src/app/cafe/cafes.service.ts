import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cafe} from './cafe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafesService {

  private apiUrl: String = 'https://gist.githubusercontent.com/josejbocanegra/fe9511b47ddb335bb0da97ff9ba7462e/raw/a9601bdb1cb26abc1dabec48b7f2417440143541/cafes.json)';

constructor(private http: HttpClient) {}

  getCafes(): Observable<Cafe[]> {

    return this.http.get<Cafe[]>(this.apiUrl);
  }

  getCafe(id: Number): Observable<CafeDetail> {
  return this.http.get<CafeDetail>(this.apiUrl + '/' + id);
  }

}
