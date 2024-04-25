import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';

@Component({
  selector: 'create-ticket-modal',
  templateUrl: './create-ticket-modal.component.html',
  styleUrls: ['./create-ticket-modal.component.css']
})
export class CreateTicketModalComponent {
  @Input() public ticket!: Ticket;
  @Input() public user!: User;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DeleteTicketModalComponent,{
      
    });
  }
}
