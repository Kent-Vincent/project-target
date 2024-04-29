import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DeleteTicketModalComponent } from './delete-ticket-modal/delete-ticket-modal.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { TicketCategoryComponent } from './ticket-category/ticket-category.component';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTicketModalComponent } from './edit-ticket-modal/edit-ticket-modal.component';
import 'flowbite';
import 'flowbite-datepicker'
@NgModule({
  declarations: [
    CreateTicketModalComponent,
    DatePickerComponent,
    DeleteTicketModalComponent,
    EditTicketModalComponent,
    StopwatchComponent,
    TicketCardComponent,
    TicketCategoryComponent,
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [
    CreateTicketModalComponent,
    DatePickerComponent,
    DeleteTicketModalComponent,
    EditTicketModalComponent,
    StopwatchComponent,
    TicketCardComponent,
    TicketCategoryComponent,
    TopNavComponent,
  ]
})
export class SharedModule { }
