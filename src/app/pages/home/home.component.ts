import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// Please dont forget to move this to workspace!
export class HomeComponent {
  isNavMenuOpen = false;

  toggleNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }
}

export const routeAnimation = trigger('routeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.3s', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('0.3s', style({ opacity: 0 })),
  ]),
]);

