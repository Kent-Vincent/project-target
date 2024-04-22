import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [provideMomentDateAdapter(undefined, {useUtc: true})],
  bootstrap: [AppComponent]
})
export class AppModule { }
