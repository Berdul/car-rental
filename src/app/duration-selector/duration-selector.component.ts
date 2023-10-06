import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { BackendApiService } from '../backend-api/backend-api.service';

@Component({
  selector: 'app-duration-selector',
  templateUrl: './duration-selector.component.html',
  styleUrls: ['./duration-selector.component.scss'],
})
export class DurationSelectorComponent implements OnInit {
  @Input() hourlyPrice: number;
  @Input() loading: boolean;
  @Output() submitEmitter: EventEmitter<{ startDate: Date; endDate: Date }> =
    new EventEmitter();

  @ViewChild('startDateInput', { static: false }) startDateInput: ElementRef;
  @ViewChild('endDateInput', { static: false }) endDateInput: ElementRef;

  form: FormGroup;

  constructor(private backendApiService: BackendApiService) {}

  ngOnInit(): void {
    var now = moment(new Date());
    var tomorrow = moment(now).add(1, 'day');

    this.form = new FormGroup({
      startDate: new FormControl<String>(this.dateToDatetimelocalInput(now)),
      endDate: new FormControl<String>(this.dateToDatetimelocalInput(tomorrow)),
    });
  }

  dateToDatetimelocalInput(date: moment.Moment): string {
    return date.format('YYYY-MM-DDTHH:mm');
  }

  /**
   * @returns Rent duration in hour, rounded up, 1 hour began is one hour paid
   */
  getRentDuration(): number {
    return this.backendApiService.computeRentDuration(
      new Date(this.form.controls['startDate'].value),
      new Date(this.form.controls['endDate'].value)
    );
  }

  getEstimatedRentPrice(): number {
    return this.hourlyPrice * this.getRentDuration();
  }

  getStartDateString(): string {
    return this.form.controls['startDate'].value;
  }

  getEndDateString(): string {
    return this.form.controls['endDate'].value;
  }

  onStartDateChange(event: any): void {
    let newMomentMilli = moment(new Date(event.target.value));

    // Adjust end date to be 1 hour latter than the new start date
    if (moment(new Date(this.getEndDateString())).diff(newMomentMilli) < 0) {
      var correctedDate = moment(newMomentMilli).add(1, 'hour'); // Add 1 hour
      this.form.controls['endDate'].setValue(
        this.dateToDatetimelocalInput(correctedDate)
      );
    }

    this.onDateChange();
  }

  onEndDateChange(event: any): void {
    let newMomentMilli = moment(new Date(event.target.value));

    // Adjust start date to be 1 hour earlier than the new end date
    if (newMomentMilli.diff(moment(new Date(this.getStartDateString()))) < 0) {
      var correctedDate = moment(newMomentMilli).subtract(1, 'hour'); // Substract 1 hour
      this.form.controls['startDate'].setValue(
        this.dateToDatetimelocalInput(correctedDate)
      );
    }

    this.onDateChange();
  }

  onDateChange(): void {
    this.startDateInput.nativeElement.max = this.getEndDateString();
    this.endDateInput.nativeElement.min = this.getStartDateString();
  }

  submit(): void {
    this.submitEmitter.emit({
      startDate: new Date(this.getStartDateString()),
      endDate: new Date(this.getEndDateString()),
    });
  }
}
