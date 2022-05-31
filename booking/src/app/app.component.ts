import { Component } from '@angular/core';
import { BookingStatusComponent } from './booking-status/booking-status.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookingNum = ''
  error = ''
  validBookingNr= false
  

  onBookingNumChange(searchValue: string): void{
    this.bookingNum = searchValue
  }

  onSubmit() {
    if (this.bookingNum.trim()) {
      this.error = ''
      // console.log(` ${this.bookingNum} need to do some api call`)
      this.validBookingNr = true
    }else{
      this.error = 'please enter a booking number'
      this.validBookingNr= false
    }
  }
}
