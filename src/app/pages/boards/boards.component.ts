import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WorkspaceService } from 'src/app/commons/services/workspace.service';
import { CreateWorkspaceModalComponent } from 'src/shared/create-workspace-modal/create-workspace-modal.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {
  workspaces: { name: string, ID: number }[] = [];

  constructor(
    private workspaceService: WorkspaceService,
    private router: Router,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.loadWorkspaces();
  }

  loadWorkspaces(): void {
    this.workspaceService.getWorkspaces().subscribe(
      (workspaces: { name: string, ID: number }[]) => {
        this.workspaces = workspaces;
      },
      (error) => {
        console.error('Error fetching workspaces:', error.error);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateWorkspaceModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'created') {
        this.loadWorkspaces();
      }
    });
  }

  workspaceID(workspaceIndex: number): void {
  const selectedWorkspaceID = this.workspaces[workspaceIndex].ID;
  this.router.navigate(['/workspace'], { queryParams: { id: selectedWorkspaceID } });
  
  }
}
