import { Component, Input } from '@angular/core';
import { Station } from '../station.model';

@Component({
  selector: 'app-station-row',
  templateUrl: './station-row.component.html',
  styleUrls: ['./station-row.component.scss'],
})
export class StationRowComponent {
  @Input() station: Station;

  panelOpen = false;

  constructor() {}
}
