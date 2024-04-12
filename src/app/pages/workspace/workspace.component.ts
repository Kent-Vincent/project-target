import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent {
  ticketCategories: TicketCategory[] = [
    {
      name: "Todo",
      tickets: [
        {
          id: 'TCV-01',
          title: 'Create a new ticket',
          deadline: new Date(),
          description: 'Create a new ticket for the user',
          labels: ['UX Writing'],
          priority: 'Medium',
          assignedUsers: [{
            name: 'Jane Doe'
          }],
          createdBy: {
            name: 'John Doe'
          },
          stopwatchSeconds: 0,
        },
        {
          id: 'TCV-01',
          title: 'Create a new ticket',
          deadline: new Date(),
          description: 'Create a new ticket for the user',
          labels: ['UX Writing'],
          priority: 'Medium',
          assignedUsers: [{
            name: 'Jane Doe'
          }],
          createdBy: {
            name: 'John Doe'
          },
          stopwatchSeconds: 0,
        },
        {
          id: 'TCV-01',
          title: 'Create a new ticket',
          deadline: new Date(),
          description: 'Create a new ticket for the user',
          labels: ['UX Writing'],
          priority: 'Medium',
          assignedUsers: [{
            name: 'Jane Doe'
          }],
          createdBy: {
            name: 'John Doe'
          },
          stopwatchSeconds: 0,
        }
      ]
    },
    {
      name: "Doing",
      tickets: []
    },
    {
      name: "Done",
      tickets: [
        {
          id: 'TCV-01',
          title: 'Create a new ticket',
          deadline: new Date(),
          description: 'Create a new ticket for the user',
          labels: ['UX Writing'],
          priority: 'Medium',
          assignedUsers: [{
            name: 'Jane Doe'
          }],
          createdBy: {
            name: 'John Doe'
          },
          stopwatchSeconds: 0,
        },
      ]
    }
  ];
  selectedCategory: TicketCategory = this.ticketCategories[0];
  isCategoryDropdownOpen: boolean = false;

  toggleCategoryDropdown() {
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
  }

  selectCategory(category: TicketCategory) {
    this.selectedCategory = category;
    this.isCategoryDropdownOpen = false;
  }
}
