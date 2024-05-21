import { Component } from '@angular/core';
import { AuthService } from 'src/app/commons/services/auth.service';
import { Router } from '@angular/router';
import { AuthTokenService } from 'src/app/commons/services/auth-token.service';
import { LoginForm } from 'src/app/commons/forms/public.form';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  Form = new LoginForm();

  constructor(private authService: AuthService, private authTokenService: AuthTokenService, private router: Router) {} 

  ngOnInit(): void{
    if (this.authTokenService.getAuthToken()) {
      this.router.navigate(['/workspace']);
    }
  }

  login(form: LoginForm['form']): void {
      this.authService.login(form.value)
      .pipe(
        catchError(error => {
          console.log('Error occurred:', error);
          throw error;
        })
      )
      .subscribe(response => {
        console.log(response);
        this.authTokenService.setAuthToken(response.token);
        this.router.navigate(['/boards']);
      });
  }

  signUp(){
    this.router.navigate(['/signup']);
  }

  

}
