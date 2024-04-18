import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-ticket-modal',
  templateUrl: './delete-ticket-modal.component.html',
  styleUrls: ['./delete-ticket-modal.component.css']
})
export class DeleteTicketModalComponent {
  @Input() ticketID!: string;
}
