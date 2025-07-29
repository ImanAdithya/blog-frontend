import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private readonly _authService: AuthService,
  ) {}

onLogin() {
  this._authService.login(this.loginData).subscribe({
    next: (res) => {
      console.log('Login Success:', res.data.access_token);
      localStorage.setItem("token",res.data.access_token)
      this.router.navigate(['/blog']);
    },
    error: (err) => {
      console.error('Login Error:', err);
      alert('Login failed');
    }
  });
}


}
