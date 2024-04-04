import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseTrackerService {
  private baseUrl:string;// = 'http://localhost:5195/api/licenses'; // Replace with your API endpoint


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'licenses';
  }

  checkLicenseExpiration(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/checkexpiration`, null);
  }
}
