  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class DashboardService {
    private apiUrl:string;
    constructor(private http: HttpClient) {
      this.apiUrl = environment.baseUrl + 'Dashboard';
    }

  // Method to get total counts for all entities
  getTotalCounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/counts`);
  }

  // Method to get monthly statistics for news
  getMonthlyNewsStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-news`);
  }

  // Method to get monthly statistics for incidents
  getMonthlyIncidentStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-incidents`);
  }

  // Method to get monthly statistics for shared resources
  getMonthlySharedResourceStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-shared-resources`);
  }

  // Method to get monthly statistics for knowledge bases
  getMonthlyKnowledgeBaseStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/monthly-knowledge-bases`);
  }
  }
