import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @Input() cars: Car[];

  displayedColumns = ['model', 'hourlyPrice', 'rating', 'condition'];
  dataSource: MatTableDataSource<Car>;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.cars);
  }
}
