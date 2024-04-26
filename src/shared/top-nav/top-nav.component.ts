import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    this.authService.logout(); 
    location.reload();
  }

  isDropdownOpen = false;
  isDropdownPriorityOpen = false;
  toggleDropDown(){
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen);
  }

  toggleDropDownPriority(){
    this.isDropdownPriorityOpen = !this.isDropdownPriorityOpen;
    console.log(this.isDropdownPriorityOpen);
  }
}
