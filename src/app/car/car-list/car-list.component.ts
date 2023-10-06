import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, catchError, first, of } from 'rxjs';
import { RouteFragment } from 'src/app/route-fragments.enum';
import { Station } from '../../station/station.model';
import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @Input() station: Station;

  carsSubscription: Subscription;
  displayedColumns = ['model', 'hourlyPrice', 'rating', 'condition', 'arrow'];
  dataSource: MatTableDataSource<Car>;
  isQuerying = this.carService.queryingCars;
  hasError = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService
      .getAvailableCars(this.station)
      .pipe(
        first(),
        catchError(() => {
          this.hasError = true;
          return of([]);
        })
      )
      .subscribe((cars) => {
        this.dataSource = new MatTableDataSource(cars);
      });
  }

  getCarViewRoute(car: Car): string {
    return `/${RouteFragment.STATION}/${this.station.id_old}/${RouteFragment.CAR}/${car.id}`;
  }
}
