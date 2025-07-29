import { Injectable } from '@angular/core';
import { CommonHttpService } from './global/common-http.service';
import { GlobalParameterService } from './global/global-parameter.service';
import { Observable } from 'rxjs';
import { BlogModel } from '../model/blogModel';

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

  getBlogByUserId(userId : number): Observable<any> {
    return this._commonHttpService.RequestGETById(this._globalParamService.primaryURL + '/blog/user', userId);
  }

  createBlog(blog : BlogModel): Observable<any> {
    return this._commonHttpService.RequestPOST(blog,this._globalParamService.primaryURL + '/blog');
  }

  updateBlog(blog : BlogModel,userId :number): Observable<any> {
    return this._commonHttpService.RequestUPDATE(blog,this._globalParamService.primaryURL + '/blog',userId);
  }

  deleteBlog(userId :number): Observable<any> {
    return this._commonHttpService.RequestDELETE(this._globalParamService.primaryURL + '/blog',userId);
  }

  searchBlogByTitle(title: string): Observable<any> {
    return this._commonHttpService.RequestSearch(this._globalParamService.primaryURL + '/blog/search', { title });
  }

}
