import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from 'src/app/models/license/license.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseDashboardService {
  private baseUrl = 'http://localhost:5195/api/licenses/counts'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getTotalCounts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
