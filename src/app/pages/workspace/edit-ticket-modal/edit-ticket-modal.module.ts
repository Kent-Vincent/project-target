import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTicketModalComponent } from './edit-ticket-modal.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { StopwatchModule } from '../stopwatch/stopwatch.module';
import { DatePickerModule } from '../date-picker/date-picker.module';




@NgModule({
  declarations: [
    EditTicketModalComponent,
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    DatePickerModule
  ],
  exports: [
    EditTicketModalComponent
  ]
})
export class EditTicketModalModule { }
