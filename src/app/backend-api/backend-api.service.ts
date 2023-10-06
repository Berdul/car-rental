import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {
  BehaviorSubject,
  Observable,
  catchError,
  delay,
  finalize,
  map,
  of,
} from 'rxjs';
import { Car } from '../car/car.model';
import { CarService } from '../car/car.service';
import { errorHandler } from '../helper/error-helper';
import { Station } from '../station/station.model';
@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  isQuerying = new BehaviorSubject(false);
  rentConfirmation: RentConfirmation;

  rentCar(
    car: Car,
    station: Station,
    startDate: Date,
    endDate: Date
  ): Observable<RentConfirmation> {
    this.isQuerying.next(true);

    return of({
      car: car,
      station: station,
      startDate: startDate,
      endDate: endDate,
    }).pipe(
      delay(200),
      map((payload) => {
        if (moment(payload.endDate).diff(payload.startDate) > 0) {
          this.rentConfirmation = {
            ...payload,
            price:
              this.computeRentDuration(payload.startDate, payload.endDate) *
              car.hourlyPrice,
          };
          return this.rentConfirmation;
        } else {
          throw new Error('400 - Bad Request');
        }
      }),
      catchError(errorHandler),
      finalize(() => this.isQuerying.next(false))
    );
  }

  resetState(): void {
    this.rentConfirmation = null;
  }

  /**
   * @returns Rent duration in hour, rounded up, 1 hour began is one hour paid
   */
  computeRentDuration(startDate: Date, endDate: Date): number {
    return Math.ceil(
      moment(endDate).diff(moment(startDate)) / (1000 * 60 * 60)
    );
  }

  constructor(private carService: CarService) {}
}

export interface RentConfirmation {
  car: Car;
  station: Station;
  startDate: Date;
  endDate: Date;
  price: number;
}
