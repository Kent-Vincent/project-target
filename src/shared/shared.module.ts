import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';
import { DeleteTicketModalComponent } from './delete-ticket-modal/delete-ticket-modal.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTicketModalComponent } from './edit-ticket-modal/edit-ticket-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CreateWorkspaceModalComponent } from './create-workspace-modal/create-workspace-modal.component';
@NgModule({
  declarations: [
    CreateTicketModalComponent,
    DeleteTicketModalComponent,
    EditTicketModalComponent,
    StopwatchComponent,
    TopNavComponent,
    CreateWorkspaceModalComponent,
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  exports: [
    CreateTicketModalComponent,
    DeleteTicketModalComponent,
    EditTicketModalComponent,
    StopwatchComponent,
    TopNavComponent,
    CreateWorkspaceModalComponent,
  ]
})
export class SharedModule { }
