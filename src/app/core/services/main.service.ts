import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../shared/baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private _httpClient = inject(HttpClient);

  // Generic GET request method
  getRequest(endpoint: string): Observable<any> {
    return this._httpClient.get(`${baseUrl}${endpoint}`);
  }

  // Generic POST request method
  postRequest(endpoint: string, body: object): Observable<any> {
    return this._httpClient.post(`${baseUrl}${endpoint}`, body);
  }

  // Generic PUT request method
  putRequest(endpoint: string, body: any): Observable<any> {
    return this._httpClient.put(`${baseUrl}${endpoint}`, body);
  }

  // Generic DELETE request method
  deleteRequest(endpoint: string): Observable<any> {
    return this._httpClient.delete(`${baseUrl}${endpoint}`);
  }
}
