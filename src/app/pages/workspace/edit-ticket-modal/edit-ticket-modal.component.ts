import { Component, Input, OnInit } from '@angular/core';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-ticket-modal',
  templateUrl: './edit-ticket-modal.component.html',
  styleUrls: ['./edit-ticket-modal.component.css']
})
export class EditTicketModalComponent {
  @Input() public ticket!: Ticket;
  @Input() public user!: User;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DeleteTicketModalComponent,{
      
    });
  }

  isDropdownOpen = false;
  isDropdownPriorityOpen = false;
  toggleDropDown(){
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen);
  }

  toggleDropDownPriority(){
    this.isDropdownPriorityOpen = !this.isDropdownPriorityOpen;
    console.log(this.isDropdownPriorityOpen);
  }

}

