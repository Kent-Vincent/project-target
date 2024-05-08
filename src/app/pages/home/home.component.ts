import { Component, HostListener, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  isNavMenuOpen = false;

  toggleNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  // navbar white onscroll
  isScrolled: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Detect if the user has scrolled down past a certain threshold (e.g., 50px)
    this.isScrolled = window.scrollY > 2;
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

