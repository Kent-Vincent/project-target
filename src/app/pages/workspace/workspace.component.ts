import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketModalComponent } from '../../../shared/create-ticket-modal/create-ticket-modal.component';
import { WorkspaceService } from 'src/app/commons/services/workspace.service';
import { StageService } from 'src/app/commons/services/stage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit {
  workspaceName: string = '';
  workspaceID: number = 0;
  workspaceDetails: any;
  stageName: string[] = [];
 

  constructor(private dialog: MatDialog, private workspaceService: WorkspaceService,
    private stageService: StageService, private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.workspaceID = params['id'];
      this.fetchWorkspaceDetails();
    });
  }

  fetchWorkspaceDetails(): void {
    this.workspaceService.getWorkspaceByID(this.workspaceID).subscribe(
      (data) => {
        this.workspaceDetails = data;
        this.workspaceName = this.workspaceDetails.workspace_name;
      },
      (error) => {
        console.error('Error fetching workspace details:', error);
      }
    );
  }

  openDialog() {
    this.dialog.open(CreateTicketModalComponent,{
      
    });
  }

  
}