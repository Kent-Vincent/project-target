import { Component, OnInit } from '@angular/core';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { WorkspaceService } from 'src/app/commons/services/workspace.service'; 

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-create-ticket-modal',
  templateUrl: './create-ticket-modal.component.html',
  styleUrls: ['./create-ticket-modal.component.css'],
  providers: [ 
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
      {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ]
})
export class CreateTicketModalComponent {
  date = new FormControl(moment());
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

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, private workspaceService: WorkspaceService) {}

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

    if (this.isDropdownPriorityOpen) {
      this.isDropdownPriorityOpen = false;
    }
  }

  toggleDropDownPriority() {
    this.isDropdownPriorityOpen = !this.isDropdownPriorityOpen;

    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

}