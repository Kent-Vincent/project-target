import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkspaceService } from 'src/app/commons/services/workspace.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  workspace: string[] = [];

  constructor(private workspaceService: WorkspaceService, private router: Router) {}

  ngOnInit(): void {
    this.workspaceService.getWorkspaceNames().subscribe(
      (data: string[]) => {
        this.workspace = data;
      },
      (error) => {
        console.error('Error fetching workspace name:', error);
      }
    );
  }
}
