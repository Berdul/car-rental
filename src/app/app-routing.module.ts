import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationListComponent } from './station/station-list/station-list.component';
import { CarViewComponent } from './car/car-view/car-view.component';
import { ConfirmationViewComponent } from './confirmation-view/confirmation-view.component';

const routes: Routes = [
  { path: 'home', component: StationListComponent, title: 'CarRental - Home' },
  { path: 'station/:stationid/car/:carid', component: CarViewComponent, title: 'CarRental - Car view'},
  { path: 'confirmation', component: ConfirmationViewComponent, title: 'CarRental - Confirmation'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
