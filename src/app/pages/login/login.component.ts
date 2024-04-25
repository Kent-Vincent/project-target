import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {} 

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          console.log('Login successful. Token:', response.token);
        },
        (error) => {
          console.log(error.error);
        }
      );
  }
}
