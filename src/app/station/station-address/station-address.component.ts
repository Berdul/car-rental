import { Component, Input } from '@angular/core';
import { Station } from '../station.model';

@Component({
  selector: 'app-station-address',
  templateUrl: './station-address.component.html',
  styleUrls: ['./station-address.component.scss'],
})
export class StationAddressComponent {
  @Input() station: Station;

  constructor() {}
}
