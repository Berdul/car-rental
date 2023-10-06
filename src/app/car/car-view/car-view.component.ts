import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, filter, first, map, of } from 'rxjs';
import { RouteFragment } from 'src/app/route-fragments.enum';
import { Station } from 'src/app/station/station.model';
import { StationService } from 'src/app/station/station.service';
import { BackendApiService } from '../../backend-api/backend-api.service';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.scss'],
})
export class CarViewComponent implements OnInit {
  carId = this.activatedRoute.params.pipe(map((params) => params['carid']));
  stationId = this.activatedRoute.params.pipe(
    map((params) => params['stationid'])
  );
  car: Car;
  station: Station;

  isCarQuerying = this.carService.queryingCars;
  isStationQuerying = this.stationService.queryingStations;
  isRentingQuerying = this.backendApiService.isQuerying;
  carHasError = false;
  stationHasError = false;
  rentingHasError = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private stationService: StationService,
    private backendApiService: BackendApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCar();
    this.fetchStation();
  }

  fetchCar(): void {
    this.carHasError = false;

    this.carId.pipe(filter((id) => !!id)).subscribe((id) =>
      this.carService
        .getCar(id)
        .pipe(
          first(),
          catchError(() => {
            this.carHasError = true;
            return of(null);
          })
        )
        .subscribe((car) => (this.car = car))
    );
  }

  fetchStation(): void {
    this.stationHasError = false;

    this.stationId.pipe(filter((id) => !!id)).subscribe((id) =>
      this.stationService
        .getStation(id)
        .pipe(
          first(),
          catchError(() => {
            this.stationHasError = true;
            return of(null);
          })
        )
        .subscribe((station) => (this.station = station))
    );
  }

  submit(payload): void {
    this.rentingHasError = false;

    this.backendApiService
      .rentCar(this.car, this.station, payload.startDate, payload.endDate)
      .pipe(
        first(),
        catchError(() => {
          this.rentingHasError = true;
          return of(null);
        })
      )
      .subscribe(() => this.router.navigate(['/', RouteFragment.CONFIRMATION]));
  }

  getHomeRoute(): string {
    return '/' + RouteFragment.HOME;
  }
}
