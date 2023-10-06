import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, map } from 'rxjs';
import { errorHandler } from '../helper/error-helper';
import { Station } from '../station/station.model';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private readonly OPENDATA_API_URL =
    'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records/';
  private readonly limitQueryParam = '&limit=20';
  private readonly offsetQueryParam = '&offset=0'; // Starting index for pagination
  private readonly searchQueryParam =
    '&refine=regpri:"LOCATION"&refine=regpar:"Véhicule partagé"';
  private readonly idQueryParam = '&refine=id_old:';

  queryingStations = new BehaviorSubject(false);

  getStations(): Observable<{
    total_count: number;
    results: Station[];
  }> {
    this.queryingStations.next(true);

    return (
      this.httpClient.get(
        this.OPENDATA_API_URL +
          '?' +
          this.searchQueryParam +
          this.offsetQueryParam +
          this.limitQueryParam
      ) as Observable<OpenDataResponse<Station>>
    ).pipe(
      catchError(errorHandler),
      finalize(() => this.queryingStations.next(false))
    );
  }

  getStation(id: string): Observable<Station> {
    this.queryingStations.next(true);

    return (
      this.httpClient.get(
        this.OPENDATA_API_URL +
          '?' +
          this.searchQueryParam +
          this.offsetQueryParam +
          this.limitQueryParam +
          this.idQueryParam + id
      ) as Observable<OpenDataResponse<Station>>
    ).pipe(
      catchError(errorHandler),
      finalize(() => this.queryingStations.next(false)),
      map((result) => (result.results.length > 0 ? result.results[0] : null))
    );
  }

  constructor(private httpClient: HttpClient) {}
}

interface OpenDataResponse<T> {
  total_count: number;
  results: T[];
}
