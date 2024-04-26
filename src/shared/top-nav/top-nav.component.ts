import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  isNavMenuOpen = false;

  toggleNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }


  constructor(private authService: AuthService) {} 

  logout(): void {
    this.authService.logout(); // Call logout method from AuthService
    // Optionally, you can perform additional tasks after logout
  }
}
