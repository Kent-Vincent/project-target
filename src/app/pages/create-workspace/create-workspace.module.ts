import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateWorkspaceRoutingModule } from './create-workspace-routing.module';
import { CreateWorkspaceComponent } from './create-workspace.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    CreateWorkspaceComponent
  ],
  imports: [
    CommonModule,
    CreateWorkspaceRoutingModule,
    SharedModule
  ]
})
export class CreateWorkspaceModule { }
