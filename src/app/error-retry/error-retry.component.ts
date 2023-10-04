import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-retry',
  templateUrl: './error-retry.component.html',
  styleUrls: ['./error-retry.component.scss']
})
export class ErrorRetryComponent {
  @Output() retry = new EventEmitter();
  
  constructor() { }

  emitRetry(): void {
    this.retry.emit();
  }
}
