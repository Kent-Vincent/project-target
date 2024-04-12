import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-category',
  templateUrl: './ticket-category.component.html',
  styleUrls: ['./ticket-category.component.css']
})
export class TicketCategoryComponent {
  @Input() category!: TicketCategory;
}

