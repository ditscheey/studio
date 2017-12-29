import { Component, OnInit, ElementRef, AfterViewInit, ViewChild  } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";
import { BookingService } from "./booking.service";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { forEach } from "@angular/router/src/utils/collection";
import { element } from "protractor";
import { DaterangePickerComponent } from 'ng2-daterangepicker';

declare var jQuery: any;
declare var check_in: any;
declare var check_out: any;

const reservations = [
  "03.06.2018",
  "04.06.2018",
  "05.06.2018",
  "06.06.2018",
  "07.06.2018",
  "08.06.2018",
  "09.06.2018",
  "10.06.2018"
];

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  // Define Variables
  bForm: FormGroup;
  test: any; 
  public pickerOptions:any;
  public bookings;
  booked = [];
  public daterange: any = {};
/*
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;
*/

  // Daterange picker
  public date = moment();



  constructor(
    private fb: FormBuilder,
    private _elRef: ElementRef,
    private bookingService: BookingService,
    private http: HttpClient
  ) {
    // Function of Constructor
    this.bookings = this.getBookings();
  }

  //
  /*
'isInvalidDate': function(day){
  return !!this.bookings.find(item => {return moment(item).isSame(day)}) 
}*/
  // expected output is an object containing the event and the picker.
  // your method can be named whaterver you want.
  // you can add multiple params to the method and pass them in the template
  public calendarCanceled(e: any) {
    console.log(e);
    // e.event
    // e.picker
  }

  public calendarApplied(e: any) {
    this.bForm.get("dateFrom").patchValue(e.picker.startDate.format('DD.MM.YYYY'));
    this.bForm.get("dateTo").patchValue(e.picker.endDate.format('DD.MM.YYYY'));
    // e.event
    // e.picker
  }

  dateSelected(value: any) {
    this.daterange.startDate = value.start;
    this.daterange.endDate = value.end;
  }

  addBooking() {
    this.bookingService.addBooking(this.bForm.value);
  }

  public getBookings() {
    this.http.get("http://localhost:3000/api/file").subscribe(data => {
      this.bookings = data;
      console.log(this.bookings);
      this.pickerOptions = {
        showDropdowns: true,
        showWeekNumbers: true,
        timePickerIncrement: 5,
        autoApply: true,
        minDate: this.date,
        alwaysShowCalendars: true,
        drops: "down",
        isInvalidDate: date => {
          for (var ii = 0; ii < this.bookings.length; ii++) {
            if (date.format("DD.MM.YYYY") === this.bookings[ii]) {
              return true;
            }
          }
        }
      };
      
    });
  }

  ngOnInit() {
    this.bookings = this.getBookings();
    // Create Form set Validation
    this.bForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.email],
      dateFrom: [, Validators.required],
      dateTo: [, Validators.required],
      comment: ""
    });
  }
}
