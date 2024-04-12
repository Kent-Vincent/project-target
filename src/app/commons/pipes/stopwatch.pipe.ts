import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stopwatch'
})
export class StopwatchPipe implements PipeTransform {

  transform(value: number): unknown {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
  }

}
