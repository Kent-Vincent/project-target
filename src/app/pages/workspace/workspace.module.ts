import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { TicketCategoryComponent } from './ticket-category/ticket-category.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteTicketModalComponent } from './delete-ticket-modal/delete-ticket-modal.component';
import { EditTicketModalModule } from './edit-ticket-modal/edit-ticket-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { StopwatchComponent } from './stopwatch/stopwatch.component';
// import { StopwatchModule } from './stopwatch/stopwatch.module';
// import { DatePickerComponent } from './date-picker/date-picker.component';
// import { EditTicketModalComponent } from './edit-ticket-modal/edit-ticket-modal.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    TicketCardComponent,
    TicketCategoryComponent,
    CreateTicketModalComponent,
    DeleteTicketModalComponent,
    // StopwatchComponent,
    // EditTicketModalComponent,
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
    EditTicketModalModule,
   ReactiveFormsModule,
  //  BrowserModule,
    // StopwatchModule
  ],
  exports: [
    WorkspaceComponent,
  ]
})
export class WorkspaceModule { }
