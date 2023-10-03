import { Component, OnInit } from '@angular/core';
import { StationService } from '../services/station.service';
import { Observable, first, map } from 'rxjs';
import { Station } from '../model/station';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss'],
})
export class StationListComponent implements OnInit {
  stations: Observable<Station[]>;

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.stations = this.stationService.getStations().pipe(map(res => res.results));
  }
}
