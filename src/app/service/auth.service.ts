import { Injectable } from '@angular/core';
import { CommonHttpService } from './global/common-http.service';
import { GlobalParameterService } from './global/global-parameter.service';
import { UserModel } from '../model/userModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    this.router.navigate(['/login']);
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    localStorage.getItem("token");
  }




}
