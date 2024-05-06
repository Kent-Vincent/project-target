import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';
import { Router } from '@angular/router';
import { CreateWorkspaceModalComponent } from '../create-workspace-modal/create-workspace-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  currentUser: any;
  isNavMenuOpen = false;

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) {} 

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
      },
      (error) => {
        console.error('Error fetching current user:', error);
      }
    );
  }

  openDialog() {
    this.dialog.open(CreateWorkspaceModalComponent,{});
  }
  
  getAvatarUrl(avatarPath: string): string {
    return 'http://127.0.0.1:8000' + avatarPath;
  }

  toggleNavMenu() {
    this.isNavMenuOpen = !this.isNavMenuOpen;
  }

  viewProfile(){
    this.router.navigate(['/view-profile']);
  }

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
