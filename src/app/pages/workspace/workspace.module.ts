import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';
import { TicketCardComponent } from './ticket-card/ticket-card.component';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { TicketCategoryComponent } from './ticket-category/ticket-category.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    TicketCardComponent,
    TicketCategoryComponent,
    CreateTicketModalComponent,
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
