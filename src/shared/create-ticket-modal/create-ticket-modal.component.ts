import { Component, OnInit, Inject  } from '@angular/core';
import { DeleteTicketModalComponent } from '../delete-ticket-modal/delete-ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {FormControl} from '@angular/forms';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { WorkspaceService } from 'src/app/commons/services/workspace.service'; 
import { TicketForm } from 'src/app/commons/forms/public.form';
import { AuthService } from 'src/app/commons/services/auth.service';
import { CurrentUserService } from 'src/app/commons/services/current-user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError } from 'rxjs';
import { TicketService } from 'src/app/commons/services/ticket.service';

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
  // for fetching the stages ID and assign it to stageID
  firstStageId: number = 0;
  stageID: number = 0;

  date = new FormControl(moment());
  isMobile: boolean = false;

  //users
  users: any;
  selectedUser: any;
  selectedAssignee: string = '';

  //assignee
  selectedValue: string = '';
  //tickets
  priority_dropdown: string = '';


  Form = new TicketForm();

  constructor(public dialog: MatDialog, private breakpointObserver: BreakpointObserver, 
    private ticketService: TicketService, private authService: AuthService,
    private userID: CurrentUserService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  currentDate = new Date();

  ngOnInit() {
    this.stageID = this.firstStageId = this.data.firstStageId;
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.isMobile = result.matches;
      });
      // create another function for fetching current users in the workspace, thanks.
    this.authService.getCurrentUser().subscribe(
        (user: any) => {
          const ID = user.users_ID
          this.userID.setCurrentUserID(ID);
          this.users = user;
          this.selectedAssignee = this.users.name || this.users.email;
        },
        (error) => {
          console.error('Error fetching current user:', error);
        }
      );
  }

  getAvatarUrl(avatarPath: string): string {
    return 'http://127.0.0.1:8000' + avatarPath;
  }

  submit(form: TicketForm['form']): void {
    const dueDateStr = this.date.value?.format('MMM D, yyyy');

    form.get('due_date')?.setValue(dueDateStr);
    // Change this into proper assignee and filed by
    const completedForm = { 
    ...form.value,
    stage: this.stageID,
    assignee: this.users.name,
    priority: this.selectedPriority,
    avatar_icon: this.users.avatar,
    filed_by: this.users.name,
    filed_by_avatar_icon: this.users.avatar,
    due_date: dueDateStr,
    time_elapsed: 0
    }
    console.log('DUE DATE:',dueDateStr);
    this.ticketService.createTicket(completedForm)
    .pipe(
      catchError(error => {
        console.log('Error occurred:', error);
        throw error;
      })
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  updateSelectedPriority(option:string) {
    this.priority_dropdown = option;
  }

  // change this to submit ticket!
  // openDialog() {
  //   this.dialog.open(DeleteTicketModalComponent, {});
  // }

  // DROPDOWN PRIORITY
  selectedPriority: any = "Low"; // Default selected assignee

  isDropdownPriorityOpen = false;

  toggleDropDownPriority(){
    this.isDropdownPriorityOpen = !this.isDropdownPriorityOpen;
  }

  selectPriority(assignee: any) {
    this.selectedPriority = assignee; // Update selected assignee
    this.isDropdownPriorityOpen = false; // Close dropdown
  }

 
  // Default selected assignee

  isDropdownAssigneeOpen = false;

  toggleDropDownAssignee(){
    this.isDropdownAssigneeOpen = !this.isDropdownAssigneeOpen;
  }

  selectAssignee(assignee: string) {
    this.selectedAssignee = assignee; // Update selected assignee
    this.isDropdownAssigneeOpen = false; // Close dropdown
  }
}