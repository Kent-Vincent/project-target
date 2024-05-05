import { Component, Input, OnInit } from '@angular/core';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-ticket-modal',
  templateUrl: './create-ticket-modal.component.html',
  styleUrls: ['./create-ticket-modal.component.css']
})
export class CreateTicketModalComponent {
  isMobile: boolean = false;

  //users
  users: any;
  selectedUser: any;

  //assignee
  selectedValue: string = '';
  //tickets
  title: string = '';
  description: string = '';
  attachments: string = '';
  time_elapsed: string = '';
  avatar_icon: string = '';
  assignee: string = '';
  due_date: string = '';
  priority: string = '';
  filed_by_avatar_icon: string = '';
  filed_by: string = '';
  cover_photo: string = '';

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver) {}

  currentDate = new Date();

  updateSelectedPriority(option:string) {
    this.priority = option;
  }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
  }

  openDialog() {
    this.dialog.open(DeleteTicketModalComponent, {});
  }

  isDropdownOpen = false;
  isDropdownPriorityOpen = false;

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen);
  }

  toggleDropDownPriority() {
    this.isDropdownPriorityOpen = !this.isDropdownPriorityOpen;
    console.log(this.isDropdownPriorityOpen);
  }
}