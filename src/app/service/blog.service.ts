import { Injectable } from '@angular/core';
import { CommonHttpService } from './global/common-http.service';
import { GlobalParameterService } from './global/global-parameter.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

 constructor(
    private readonly _commonHttpService: CommonHttpService,
    private readonly _globalParamService: GlobalParameterService,
  ) {}

  getAllBlogs(): Observable<any> {
    return this._commonHttpService.RequestGET(this._globalParamService.primaryURL + '/blog');
  }

}
