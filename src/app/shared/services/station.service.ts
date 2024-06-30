import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Station, StationResponse } from '../models/station';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private _baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getStations(data: any): Observable<Station[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const body = new URLSearchParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        body.set(key, data[key]);
      }
    }

    return this.http
      .post<StationResponse>(
        `${this._baseUrl}/station/data/list`,
        body.toString(),
        { headers }
      )
      .pipe(
        map((res: StationResponse) => res.data),
        catchError((e: HttpErrorResponse) => {
          return throwError(() => e);
        })
      );
  }
}
