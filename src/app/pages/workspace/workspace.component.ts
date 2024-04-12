import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  ticket: Ticket = {
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
}
