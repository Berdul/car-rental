import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export const errorHandler = (error: HttpErrorResponse) => {
  if (error.error instanceof ErrorEvent) {
    // Client or network error
    console.error('An error occurred:', error.error.message);
  } else {
    // Backend error
    console.error(`An error occurred ${error.status}: ${error.error}`);
  }

  return throwError(() => error);
};
