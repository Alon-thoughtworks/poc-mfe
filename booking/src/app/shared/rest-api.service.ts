import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry } from 'rxjs';
import { random } from 'lodash';
import {BookingStatus} from '../booking-status/booking-status.component'
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBooking(bookingNum:string): Observable<BookingStatus> {
    let number = random(0, 100)
    return this.http.get<BookingStatus>(this.apiURL + `/todos/${number}`);
  }


  handleError(error: any):string {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return errorMessage
  }
  
}
