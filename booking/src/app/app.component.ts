import {Component, ElementRef, OnInit} from '@angular/core';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import {kebabCase, forEach} from 'lodash';
import { Theme } from "../themeProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookingNum = ''
  error = ''
  validBookingNr= false
  constructor(private element: ElementRef, private theme: Theme) {
  }

  /**
   * here we set the css as come from the React container into anguler we change the format from Camelcase to kababe case
   */
  ngOnInit(): void {
    forEach(this.theme, (value, key) => {
      this.element.nativeElement.style.setProperty(`--${kebabCase(key)}`, value);
    });
  }

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
