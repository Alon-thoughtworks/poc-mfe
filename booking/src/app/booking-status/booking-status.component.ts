import { Component, OnInit, Input } from '@angular/core';

import { RestApiService } from '../shared/rest-api.service';

export interface BookingStatus{
  id: number;
  title:string;
  userId: number;
  completed: boolean;
}

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {
  bookingStatus: BookingStatus | null = null;
  @Input() bookingNumer: string = '';
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    console.log(this.bookingNumer)
    this.restApi.getBooking(this.bookingNumer).subscribe((data: BookingStatus) => {
     this.bookingStatus = data
    });
  }

}
