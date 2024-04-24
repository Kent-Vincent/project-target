import { Component } from '@angular/core';
import { RegisterService } from 'src/app/commons/services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  username: string = '';
  email: string = '';
  password: string = '';
  re_password: string = '';

  constructor(private registerService: RegisterService) {} 

  register(): void{

    if (this.password != this.re_password){
      console.error('Your Password Is Not The Same!');
    }
    else{
      this.registerService.register(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
