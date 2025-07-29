import { Injectable } from '@angular/core';
import { CommonHttpService } from './global/common-http.service';
import { GlobalParameterService } from './global/global-parameter.service';
import { UserModel } from '../model/userModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable(); // observable to subscribe

 constructor(
    private readonly _commonHttpService: CommonHttpService,
    private readonly _globalParamService: GlobalParameterService,
    private readonly router : Router
  ) {}
  
  login(data: UserModel): Observable<any> {
    return this._commonHttpService.RequestPOST(data,this._globalParamService.primaryURL + '/auth/login');
  }

  signup(data: UserModel): Observable<any> {
    return this._commonHttpService.RequestPOST(data,this._globalParamService.primaryURL + '/auth/register');
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
    this.isLoggedInSubject.next(false); 
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    localStorage.getItem("token");
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  
  triggerLoginState(): void {
    this.isLoggedInSubject.next(true);
  }
}
