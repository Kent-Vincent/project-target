import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchPipe } from './stopwatch.pipe';



@NgModule({
  declarations: [
    StopwatchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StopwatchPipe
  ]
})
export class PipesModule { }
