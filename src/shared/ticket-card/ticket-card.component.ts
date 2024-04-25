import { Component, Input } from '@angular/core';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { StopwatchPipe } from 'src/app/commons/pipes/stopwatch.pipe';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
})
export class TicketCardComponent {
  @Input() ticket!: Ticket;
  isPlaying: boolean = false;
  intervalId: any;

  togglePlayPause() {
    if (this.isPlaying) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.isPlaying = true;
    this.intervalId = setInterval(() => {
      this.ticket.stopwatchSeconds++;
    }, 1000);
  }

  pauseTimer() {
    this.isPlaying = false;
    clearInterval(this.intervalId);
  }
}
