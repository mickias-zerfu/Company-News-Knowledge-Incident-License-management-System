import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { License } from 'src/app/models/license/license.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenseDashboardService {
  private baseUrl : string;// = 'http://localhost:5195/api/licenses/counts'; // Replace with your API endpoint


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'counts';
  }

  getTotalCounts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
