import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData : UserModel = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private readonly _authService: AuthService,
  ) {}

  onLogin() {

   if (!this.loginData.username || !this.loginData.password) {
      alert('Please fill in all fields.');
      return;
    }

    this._authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Login Success:', res.data.access_token);
        localStorage.setItem("token",res.data.access_token);
        localStorage.setItem("userId",res.data.userId);
        localStorage.setItem("username",res.data.username)
        this._authService.triggerLoginState();
        this.router.navigate(['/blog']);

      },
      error: (err) => {
        console.error('Login Error:', err);
        alert(err.error.message);
      }
    });
}

}
