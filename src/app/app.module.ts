import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { StationListComponent } from './station/station-list/station-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { ErrorRetryComponent } from './error-retry/error-retry.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { OrdinalPipe } from './pipe/ordinal';
import { StationRowComponent } from './station/station-row/station-row.component';

@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    CarListComponent,
    OrdinalPipe,
    StationRowComponent,
    ErrorRetryComponent,
    HeaderBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
