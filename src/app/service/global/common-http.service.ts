import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  constructor(private http: HttpClient) {}

  // 🔐 Get token from storage
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    });
  }

  RequestGET(url: string): Observable<any> {
    const headers = this.getAuthHeaders();

    return this.http.get<any>(url, {
      headers,
      withCredentials: true,
    });
  }

  RequestPOST(jsonData: any, url: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const body = JSON.stringify(jsonData);

    return this.http.post<any>(url, body, {
      headers,
      withCredentials: true,
    });
  }

  RequestPOSTUrlEncode(body: any, url: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': token ? `Bearer ${token}` : '',
    });

    return this.http.post<any>(url, body.toString(), {
      headers,
      withCredentials: true,
    });
  }

  RequestUPDATE(jsonData: any, url: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const body = JSON.stringify(jsonData);

    return this.http.put<any>(url, body, {
      headers,
      withCredentials: true,
    });
  }

  RequestDELETE(jsonData: any, url: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const body = JSON.stringify(jsonData);

    return this.http.request<any>('DELETE', url, {
      headers,
      body,
      withCredentials: true,
    });
  }
}
