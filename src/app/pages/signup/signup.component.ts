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
    else if (this.username == '') {
      console.log('Empty Username');
    }
    else if(this.email == ''){
      console.log('Empty Email');
    }
    else if(this.password == ''){
      console.log('Empty Password');
    }
    else if(this.re_password == ''){
      console.log('Empty Re Password')
    }
    else{
      this.registerService.register(this.email, this.password)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
        },
        (error) => {
          if (error.error.email == 'user with this email already exists.') {
            console.error('This email is already taken!');
          }
          else{
            console.error('Registration failed:', error);
          }
        }
      );
    }
  }
}
