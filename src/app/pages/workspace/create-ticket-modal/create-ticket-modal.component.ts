import { Component, Input } from '@angular/core';

@Component({
  selector: 'create-ticket-modal',
  templateUrl: './create-ticket-modal.component.html',
  styleUrls: ['./create-ticket-modal.component.css']
})
export class CreateTicketModalComponent {
  @Input() public ticket!: Ticket;
  @Input() public user!: User;
}
