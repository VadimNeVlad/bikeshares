import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Station, StationResponse } from '../models/station';

@Injectable({
  providedIn: 'root',
})
export class StationService {
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
        `https://data.bikeshare.ie/dataapi/resources/station/data/list`,
        body.toString(),
        { headers }
      )
      .pipe(map((res: StationResponse) => res.data));
  }
}
