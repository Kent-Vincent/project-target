import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProfileRoutingModule } from './view-profile-routing.module';
import { ViewProfileComponent } from './view-profile.component';
import { share } from 'rxjs';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    ViewProfileRoutingModule,
    SharedModule
  ],
  exports: [
    ViewProfileComponent
  ]
})
export class ViewProfileModule { }
