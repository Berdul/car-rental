import { Component } from '@angular/core';
import { RouteFragment } from '../route-fragments.enum';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
  constructor() {}

  getHomeRoute(): string {
    return '/' + RouteFragment.HOME;
  }
}
