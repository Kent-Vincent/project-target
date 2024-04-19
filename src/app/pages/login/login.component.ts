import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Email:', this.username);
    console.log('Password:', this.password);
    
  }
}
