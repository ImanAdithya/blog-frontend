import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  username: string | null = '';

  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthStatus();
  }

  checkAuthStatus(): void {
    this.isAuthenticated = this._authService.isLoggedIn();
    if (this.isAuthenticated) {
      this.username = localStorage.getItem('username');
    } else {
      this.username = '';
    }
  }

  logout(): void {
    this._authService.logout();
    this.checkAuthStatus(); 
  }
}
