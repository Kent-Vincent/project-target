import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} 

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/workspace'])
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  

}
