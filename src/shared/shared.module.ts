import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from './modals/modal-delete/modal-delete.component';
import { ModalCreateTicketComponent } from './modals/modal-create-ticket/modal-create-ticket.component';



@NgModule({
  declarations: [
    ModalDeleteComponent,
    ModalCreateTicketComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDeleteComponent,
    ModalCreateTicketComponent
  ]
})
export class SharedModule { }
