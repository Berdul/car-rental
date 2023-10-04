import { Component, OnInit } from '@angular/core';
import { catchError, first, map, of } from 'rxjs';
import { Station } from '../station.model';
import { StationService } from '../station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
})
export class StationListComponent implements OnInit {
  stations: Station[];
  isQuerying = this.stationService.queryingStations;
  hasError = false;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.fetchStations();
  }

  fetchStations() {
    this.hasError = false;

    this.stationService
      .getStations()
      .pipe(map((res) => res.results))
      .pipe(
        first(),
        catchError(() => {
          this.hasError = true;
          return of([]);
        })
      )
      .subscribe((stations) => (this.stations = stations));
  }
}
