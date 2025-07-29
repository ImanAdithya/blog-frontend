import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string | null = '';
  isAuthenticated: boolean = false;

  constructor(private readonly _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.isLoggedIn$.subscribe((status) => {
      this.isAuthenticated = status;
      this.username = localStorage.getItem('username');
    });
  }

  logout(): void {
    this._authService.logout();
  }
}
