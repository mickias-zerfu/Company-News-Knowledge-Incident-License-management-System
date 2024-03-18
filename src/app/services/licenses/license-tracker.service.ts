import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseTrackerService {
  private baseUrl = '/api/licenses'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  checkLicenseExpiration(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/checkexpiration`, null);
  }
}
