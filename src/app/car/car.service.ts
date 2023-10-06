import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  catchError,
  delay,
  finalize,
  map,
  of
} from 'rxjs';
import { generateCarArray, getCar } from '../helper/car-helper';
import { errorHandler } from '../helper/error-helper';
import { Station } from '../station/station.model';
import { Car } from './car.model';

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

  getCar(id: string): Observable<Car> {
    this.queryingCars.next(true);

    return of(getCar(id)).pipe(
      map((car) => {
        if (car) {
          return car;
        } else {
          throw new Error('404');
        }
      }),
      delay(200),
      catchError(errorHandler),
      finalize(() => this.queryingCars.next(false))
    );
  }

  constructor() {}
}
