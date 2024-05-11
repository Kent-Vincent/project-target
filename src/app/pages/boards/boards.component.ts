import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from 'src/app/commons/services/workspace.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  workspaces: { name: string, ID: number }[] = [];

  constructor(private workspaceService: WorkspaceService, private router: Router) {}

  ngOnInit(): void {
    this.workspaceService.getWorkspaces().subscribe(
      (workspaces: { name: string, ID: number }[]) => {
        this.workspaces = workspaces;
      },
      (error) => {
        console.error('Error fetching workspaces:', error);
      }
    );
  }

  workspaceID(workspaceIndex: number): void {
  const selectedWorkspaceID = this.workspaces[workspaceIndex].ID;
  this.router.navigate(['/workspace'], { queryParams: { id: selectedWorkspaceID } });
  
  }
}
