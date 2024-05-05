import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketModalComponent } from '../../../shared/create-ticket-modal/create-ticket-modal.component';
import { EditTicketModalComponent } from '../../../shared/edit-ticket-modal/edit-ticket-modal.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent {
  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(CreateTicketModalComponent,{
    // this.dialog.open(EditTicketModalComponent,{
      
    });
  }

  // selectedCategory: TicketCategory = this.ticketCategories[0];
  // isCategoryDropdownOpen: boolean = false;

  // toggleCategoryDropdown() {
  //   this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
  // }

  // selectCategory(category: TicketCategory) {
  //   this.selectedCategory = category;
  //   this.isCategoryDropdownOpen = false;
  // }
}