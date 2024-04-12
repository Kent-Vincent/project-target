import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';


@NgModule({
  declarations: [
    WorkspaceComponent,
    TicketCardComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    WorkspaceComponent,
  ]
})
export class WorkspaceModule { }
