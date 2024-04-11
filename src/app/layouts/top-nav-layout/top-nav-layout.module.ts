import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavLayoutRoutingModule } from './top-nav-layout-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { TopNavLayoutComponent } from './top-nav-layout.component';
import { WorkspaceComponent } from 'src/app/pages/workspace/workspace.component';
import { WorkspaceModule } from 'src/app/pages/workspace/workspace.module';


@NgModule({
  declarations: [
    TopNavComponent,
    TopNavLayoutComponent,
  ],
  imports: [
    CommonModule,
    TopNavLayoutRoutingModule,
    RouterModule,
    WorkspaceModule,
  ],
  exports: [
    TopNavComponent,
    TopNavLayoutComponent,
  ]
})
export class TopNavLayoutModule { }
