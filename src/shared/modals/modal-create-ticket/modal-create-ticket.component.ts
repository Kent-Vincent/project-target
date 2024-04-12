import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-create-ticket',
  templateUrl: './modal-create-ticket.component.html',
  styleUrls: ['./modal-create-ticket.component.css']
})
export class ModalCreateTicketComponent {
  @Input() ticket!: Ticket;
  @Input() user!: User;
  
}
