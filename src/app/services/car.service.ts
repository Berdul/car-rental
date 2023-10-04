import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, delay, finalize, of, tap } from 'rxjs';
import { generateCarArray } from '../helper/car-helper';
import { Car } from '../model/car';
import { Station } from '../model/station';
import { errorHandler } from '../helper/error-helper';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  queryingCars = new BehaviorSubject(false);

  // Simulate an Api call to a backend to get available Cars from a station
  getAvailableCars(station: Station): Observable<Car[]> {
    this.queryingCars.next(true);

    return of(generateCarArray(station.placal)).pipe(
      delay(200),
      catchError(errorHandler),
      finalize(() => this.queryingCars.next(false))
    );
  }

  constructor() {}
}
