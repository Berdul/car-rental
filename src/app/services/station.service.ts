import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Station } from '../model/station';
import { appendCarsToStation } from '../helper/car-helper';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  private readonly OPENDATA_API_URL =
    'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records?limit=20&refine=regpri:"LOCATION"&refine=regpar:"Véhicule partagé"';

  getStations(): Observable<{
    total_count: number;
    results: Station[];
  }> {
    return (
      this.httpClient.get(this.OPENDATA_API_URL) as Observable<
        Response<Station>
      >
    ).pipe(
      // Simulate that the api call to Opendata return the cars in the station
      map((response) => ({
        ...response,
        results: response.results.map((result) => appendCarsToStation(result)),
      }))
    );
  }

  constructor(private httpClient: HttpClient) {}
}

interface Response<T> {
  total_count: number;
  results: T[];
}
