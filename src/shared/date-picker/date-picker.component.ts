import { Component, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  currentDate = new Date();
  date = new FormControl(moment([2021, 0, 1]));
}
