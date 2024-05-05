import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/app/commons/services/auth-token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private authTokenService: AuthTokenService, private router: Router) {} 

  ngOnInit(): void{
    if (this.authTokenService.getAuthToken()) {
      this.router.navigate(['/workspace']);
    }
  }

  login(): void {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          this.authTokenService.setAuthToken(response.token);
          this.router.navigate(['/workspace'])
        },
        (error) => {
          console.log(error.error);
        }
      );
  }

  

}
