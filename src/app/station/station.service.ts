import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize } from 'rxjs';
import { errorHandler } from '../helper/error-helper';
import { Station } from '../station/station.model';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private readonly OPENDATA_API_URL =
    'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records?limit=20&refine=regpri:"LOCATION"&refine=regpar:"Véhicule partagé"&offset=0';

  queryingStations = new BehaviorSubject(false);

  getStations(): Observable<{
    total_count: number;
    results: Station[];
  }> {
    this.queryingStations.next(true);

    return (
      this.httpClient.get(this.OPENDATA_API_URL) as Observable<
        OpenDataResponse<Station>
      >
    ).pipe(
      catchError(errorHandler),
      finalize(() => this.queryingStations.next(false))
    );
  }

  constructor(private httpClient: HttpClient) {}
}

interface OpenDataResponse<T> {
  total_count: number;
  results: T[];
}
