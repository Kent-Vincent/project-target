import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    WorkspaceComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    WorkspaceRoutingModule,
    SharedModule
  ],
  exports: [
    WorkspaceComponent,
  ]
})
export class WorkspaceModule { }
