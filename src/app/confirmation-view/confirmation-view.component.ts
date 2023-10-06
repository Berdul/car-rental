import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BackendApiService,
  RentConfirmation,
} from '../backend-api/backend-api.service';
import { RouteFragment } from '../route-fragments.enum';

@Component({
  selector: 'app-confirmation-view',
  templateUrl: './confirmation-view.component.html',
  styleUrls: ['./confirmation-view.component.scss'],
})
export class ConfirmationViewComponent implements OnInit {
  confirmation: RentConfirmation;

  constructor(
    private backendApiService: BackendApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.confirmation = this.backendApiService.rentConfirmation;
    console.log(this.confirmation);
  }

  navigateHome(): void {
    this.backendApiService.resetState();
    this.router.navigate(['/', RouteFragment.HOME]);
  }
}
