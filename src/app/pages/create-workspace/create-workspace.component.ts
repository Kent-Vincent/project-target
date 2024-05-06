import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWorkspaceModalComponent } from 'src/shared/create-workspace-modal/create-workspace-modal.component';

@Component({
  selector: 'app-create-workspace',
  templateUrl: './create-workspace.component.html',
  styleUrls: ['./create-workspace.component.css']
})
export class CreateWorkspaceComponent {

  constructor(public dialog: MatDialog) {}

  
  ngOnInit(): void{
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateWorkspaceModalComponent, {
      disableClose: true, 
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
