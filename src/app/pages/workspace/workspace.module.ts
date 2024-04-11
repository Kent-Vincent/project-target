import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkspaceComponent,
  ]
})
export class WorkspaceModule { }
