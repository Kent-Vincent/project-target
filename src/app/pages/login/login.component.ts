import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = ''.trim();
  password: string = '';

  constructor(private authService: AuthService) {} 

  onLogin() {
    // Call the login method of AuthService
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          `// Handle successful login, such as redirecting to another page`
          console.log('Login successful:', response);
        },
        (error) => {
          // Handle failed login, such as displaying an error message
          console.error('Login failed:', error);
        }
      );
  }
}
