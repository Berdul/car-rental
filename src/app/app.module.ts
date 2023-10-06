import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { StationListComponent } from './station/station-list/station-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { CarViewComponent } from './car/car-view/car-view.component';
import { ConfirmationViewComponent } from './confirmation-view/confirmation-view.component';
import { DurationSelectorComponent } from './duration-selector/duration-selector.component';
import { ErrorRetryComponent } from './error-retry/error-retry.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LoaderComponent } from './loader/loader.component';
import { OrdinalPipe } from './pipe/ordinal';
import { StationAddressComponent } from './station/station-address/station-address.component';
import { StationRowComponent } from './station/station-row/station-row.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    CarListComponent,
    OrdinalPipe,
    StationRowComponent,
    ErrorRetryComponent,
    HeaderBarComponent,
    CarViewComponent,
    StationAddressComponent,
    LoaderComponent,
    DurationSelectorComponent,
    ConfirmationViewComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
