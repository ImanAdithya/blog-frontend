import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserModel } from 'src/app/model/userModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData: UserModel = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  handleSignup(): void {
    if (!this.signupData.username || !this.signupData.password) {
      alert('Please fill in all fields.');
      return;
    }

    this.authService.signup(this.signupData).subscribe({
      next: () => {
        alert('Signup successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Signup failed.');
        console.error(err);
      }
    });
  }
}
